<script>
    import {fetchWins} from "../api/fetchWins.js";
    import AuctionCard from "../components/AuctionCard.svelte";

    let wonAuctionsPromise = fetchWins();
</script>

<h2>Wins page</h2>
<section class="auction-cards">
    {#await wonAuctionsPromise}
        <p>Loading wins...</p>
    {:then wonAuctions}
        {#if wonAuctions.length > 0}
            {#each wonAuctions as auction}
                <AuctionCard
                        id="{auction.id}"
                        laptopName="{auction.laptopName}"
                        currentPrice="{auction.currentPrice}"
                        endDate="{auction.endTime}"
                        isFinished={true}
                />
            {/each}
        {:else}
            <p>You haven't won any auctions yet.</p>
        {/if}
    {:catch error}
        <p>Error fetching wins: {error}</p>
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