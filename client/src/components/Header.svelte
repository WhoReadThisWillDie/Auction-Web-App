<script>
    export let active
</script>

<nav>
    <a class:active={active === "/"} href="/laptops">Laptops</a>
    <a class:active={active === "/about"} href="/auctions">Auctions</a>
</nav>

<style>
    nav {
        background-color: var(--blue-dark);
        min-height: 4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
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

    a:hover, a.active {
        background-color: var(--blue-light);
        color: var(--blue-dark);
    }

</style>