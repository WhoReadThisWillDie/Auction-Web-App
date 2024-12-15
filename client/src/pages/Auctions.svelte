<script>
    import Card from "../components/AuctionCard.svelte";
    import {fetchAuctions} from "../api/fetchAuctions.js";
</script>

<section class="auction-cards">
    {#await fetchAuctions()}
        <p>Loading...</p>
    {:then auctions}
        {#if auctions.length > 0}
            {#each auctions as auction}
                <Card
                        id="{auction.id}"
                        laptopName="{auction.laptopName}"
                        currentPrice="{auction.currentPrice}"
                        endDate="{auction.endTime}"
                />
            {/each}
        {/if}
    {:catch error}
        <p>Error fetching auctions: {error}</p>
    {/await}
</section>

<style>
    .auction-cards {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 1rem;
        width: 100%;
    }

    @media (max-width: 1024px) {
        .auction-cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 600px) {
        .auction-cards {
            grid-template-columns: 1fr;
        }
    }
</style>