<script>
    import {fetchAuction, fetchAuctionBids, postBid} from "../api/fetchAuction.js";
    import {decodeToken} from "../utils/decodeToken.js";
    import {tokenStore} from "../stores/tokenStore.js";
    import InputField from "../components/InputField.svelte";
    import Button from "../components/Button.svelte";

    export let params;

    let bidPrice;
    let auctionPromise = fetchAuction(params.id);
    let bidsPromise = fetchAuctionBids(params.id);
    let token = $tokenStore ? decodeToken($tokenStore) : undefined;

    async function createBid(bidPrice, auctionId) {
        try {
            const data = await postBid(auctionId, bidPrice);
            auctionPromise = fetchAuction(params.id);
            bidsPromise = fetchAuctionBids(params.id);
            alert(data.message);
        } catch (error) {
            alert(error);
        }
    }
</script>

<section class="auction-detail">
    {#await auctionPromise}
        <p>Loading auction details...</p>
    {:then auction}
        {#if auction.id}
            <section class="auction-header">
                <h1>{auction.laptopName}</h1>
                <p>Initial Price: <strong>€{auction.initialPrice}</strong></p>
                <p>Current Price: <strong>€{auction.currentPrice}</strong></p>
                <p>Ends on: <strong>{new Date(auction.endTime).toLocaleString()}</strong></p>
            </section>

            {#if token && !token?.isAdmin}
                <section class="auction-bid-section">
                    <h2>Place Your Bid</h2>
                    <form on:submit|preventDefault={() => createBid(bidPrice, auction.id)}>
                        <InputField placeholder="Your bid" type="number" bind:value={bidPrice} required/>
                        <Button text="Place bid" callback={() => {}}/>
                    </form>
                </section>
            {/if}

            <section class="auction-bids">
                <h2>Bids</h2>
                {#await bidsPromise}
                    <p>Loading auction bids...</p>
                {:then bids}
                    {#if bids.length > 0}
                        <ul>
                            {#each bids.reverse() as bid}
                                <li>
                                    <p>{bid.user}: €{bid.price} - {new Date(bid.dateTime).toLocaleString()}</p>
                                </li>
                            {/each}
                        </ul>
                    {:else}
                        <p>No bids yet.</p>
                    {/if}
                {:catch error}
                    <p class="error">Error fetching bids: {error}</p>
                {/await}
            </section>
        {/if}
    {:catch error}
        <p class="error">Error fetching bids: {error}</p>
    {/await}
</section>

<style>
    .auction-detail {
        padding: 2rem;
        max-width: 50rem;
        margin: 0 auto;
    }

    .auction-header {
        border-bottom: 0.0625rem solid #ccc;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
    }

    .auction-header h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }

    .auction-bid-section {
        margin-top: 2rem;
        width: 40%;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }

    .auction-bids {
        margin-top: 2rem;
        padding-top: 1rem;
        border-top: 0.0625rem solid #ccc;
    }

    .auction-bids ul {
        list-style: none;
        padding-left: 0;
    }

    .auction-bids li {
        margin-bottom: 0.5rem;
    }

    .error {
        color: red;
        font-weight: bold;
    }
</style>
