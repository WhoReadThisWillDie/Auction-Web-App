<script>
    import LaptopCard from "../components/LaptopCard.svelte";
    import {fetchLaptops} from "../api/fetchLaptops.js";
    import router from "page";
    import {tokenStore} from "../stores/tokenStore.js";
    import {decodeToken} from "../utils/decodeToken.js";
    import Button from "../components/Button.svelte";

    const token = $tokenStore ? decodeToken($tokenStore) : undefined;

    let laptopsPromise = fetchLaptops();
    async function updateLaptops() {
        laptopsPromise = fetchLaptops();
    }
</script>

{#if token?.isAdmin}
    <Button text="Add Laptop" callback={() => router.redirect('/laptops/add')}/>
{/if}
<section class="laptop-cards">
    {#await laptopsPromise}
        <p>Loading...</p>
    {:then laptops}
        {#if laptops.length > 0}
            {#each laptops as laptop}
                <LaptopCard
                        id="{laptop.id}"
                        name={laptop.name}
                        brand={laptop.brand}
                        cpu={laptop.cpu}
                        gpu={laptop.gpu}
                        ram={laptop.ram}
                        ssd={laptop.ssd}
                        image="{laptop.imagePath}"
                        on:removeLaptop={() => updateLaptops()}
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