<script>
    import router from 'page'
    import Button from "./Button.svelte";
    import {createEventDispatcher, onDestroy} from 'svelte';
    import {tokenStore} from "../stores/tokenStore.js";
    import {decodeToken} from "../utils/decodeToken.js";
    import {deleteAuction} from "../api/fetchAuction.js";

    export let id
    export let laptopName
    export let currentPrice
    export let endDate

    let timeRemaining = "";
    let token = $tokenStore ? decodeToken($tokenStore) : undefined;

    const dispatch = createEventDispatcher();

    const formatTime = (ms) => {
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
        const hours = Math.floor(ms % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ms % (1000 * 60)) / 1000);
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    const updateCountdown = () => {
        const endTime = new Date(endDate);
        const currentTime = new Date();
        const timeDifference = endTime.getTime() - currentTime.getTime();

        if (timeDifference <= 0) {
            timeRemaining = "Auction ended";
            clearInterval(countdownInterval);
        } else {
            timeRemaining = formatTime(timeDifference);
        }
    };

    let countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    onDestroy(() => {
        clearInterval(countdownInterval);
    });

    async function removeAuction(auctionId) {
        await deleteAuction(auctionId);
        dispatch('removeAuction');
    }
</script>


<article class="card" on:click={() => router.redirect(`/auctions/${id}`)}>
    <h3>Auction for {laptopName}</h3>
    <p>Current Price: €{currentPrice}</p>
    <p>Ends on: {new Date(endDate).toLocaleDateString()}</p>
    <p class="time-remaining">Time left: {timeRemaining}</p>
    {#if token?.isAdmin}
        <section class="buttons">
            <Button text="Edit" callback={() => {router.redirect(`/auctions/${id}/edit`)}}/>
            <Button text="Delete" callback={() => removeAuction(id)}/>
        </section>
    {/if}
</article>

<style>
    @import '../root.css';

    .card {
        width: 100%;
        cursor: pointer;
        transition: transform 0.6s, box-shadow 0.3s ease-in-out;
        margin-top: 1rem;
        border-radius: 1rem;
        box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.1);
        background-color: var(--blue-light);
        padding: 0.5rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .card:hover {
        box-shadow: 0 0 0.5rem var(--blue-dark);
    }

    .time-remaining {
        font-size: 1.2rem;
        font-weight: bolder;
        color: var(--blue-dark);
        margin-top: 1rem;
    }
</style>
