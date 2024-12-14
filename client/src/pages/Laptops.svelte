<script>
    import Card from "../components/LaptopCard.svelte";
    import {fetchLaptops} from "../api/fetchLaptops.js";
</script>

<section class="laptop-cards">
    {#await fetchLaptops()}
        <p>Loading...</p>
    {:then laptops}
        {#if laptops.length > 0}
            {#each laptops as laptop}
                <Card
                        name={laptop.name}
                        brand={laptop.brand}
                        cpu={laptop.cpu}
                        gpu={laptop.gpu}
                        ram={laptop.ram}
                        ssd={laptop.ssd}
                        image="{laptop.imagePath}"
                />
            {/each}
        {/if}
    {:catch error}
        <p>Error fetching laptops: {error}</p>
    {/await}
</section>

<style>
    .laptop-cards {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 1rem;
        width: 100%;
    }

    @media (max-width: 1024px) {
        .laptop-cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 600px) {
        .laptop-cards {
            grid-template-columns: 1fr;
        }
    }
</style>