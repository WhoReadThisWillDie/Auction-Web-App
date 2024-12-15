<script>
    import router from 'page'
    import { onDestroy } from 'svelte';

    export let id
    export let laptopName
    export let currentPrice
    export let endDate

    let timeRemaining = "";

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
</script>


<article class="card" on:click={() => router.redirect(`/auction/${id}`)}>
    <h3>Auction for {laptopName}</h3>
    <p>Current Price: €{currentPrice}</p>
    <p>Ends on: {new Date(endDate).toLocaleDateString()}</p>
    <p class="time-remaining">Time left: {timeRemaining}</p>
</article>

<style>
    @import '../root.css';

    .card {
        width: 100%;
        height: 20rem;
        cursor: pointer;
        transition: transform 0.6s, box-shadow 0.3s ease-in-out;
        margin-top: 1rem;
        border-radius: 1rem;
        box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.1);
        background-color: var(--blue-light);
        padding: 1rem;
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
