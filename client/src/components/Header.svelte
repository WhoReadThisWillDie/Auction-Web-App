<script>
    import {tokenStore} from '../stores/tokenStore.js';

    export let active;

    function logOut() {
        $tokenStore = null;
        active = null;
    }

    $: isLoggedOut = $tokenStore == null;
</script>

<nav>
    <div class="left-links">
        <a class:active={active === "/laptops"} href="/laptops">Laptops</a>
        <a class:active={active === "/auctions"} href="/auctions">Auctions</a>
        <a class:active={active === "/profile"} href="/profile">Profile</a>
    </div>

    {#if !isLoggedOut}
        <a href="/login" on:click={logOut}>Log out</a>
    {:else}
        <a href="/login" on:click={logOut}>Log in</a>
    {/if}
</nav>

<style>
    nav {
        background-color: var(--blue-dark);
        min-height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .left-links {
        margin-inline-start: 1rem;
        display: flex;
        gap: 3rem;
    }

    a {
        text-decoration: none;
        color: white;
        padding: 0.5rem;
        min-width: 5rem;
        min-height: 1.5rem;
        border-radius: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
    }

    a.active, a:hover {
        background-color: var(--blue-light);
        color: var(--blue-dark);
    }

    a.active {
        background-color: var(--blue-light);
        color: var(--blue-dark);
    }

    a:last-child {
        margin-inline-end: 1rem;
    }

    @media (max-width: 600px) {
        nav {
            gap: 1rem;
            align-items: center;
            padding: 0;
            margin: 0;
        }

        .left-links {
            flex-direction: column;
            gap: 1rem;
        }
    }
</style>
