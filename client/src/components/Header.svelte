<script>
    export let active
</script>

<nav>
    <a class:active={active === "/laptops"} href="/laptops">Laptops</a>
    <a class:active={active === "/auctions"} href="/auctions">Auctions</a>
    <a class:active={active === "/users/:id"} href="/users/:id">Profile</a>
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

    a.active, a:hover {
        background-color: var(--blue-light);
        color: var(--blue-dark);
    }

    a.active {
        background-color: var(--blue-light);
        color: var(--blue-dark);
    }

    @media (max-width: 600px) {
        nav {
            gap: 1rem;
            align-items: center;
            padding: 0;
            margin: 0;
        }
    }
</style>