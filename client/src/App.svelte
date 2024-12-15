<script>
    import router from 'page'

    import Laptops from './pages/Laptops.svelte'
    import Auctions from './pages/Auctions.svelte'
    import AuctionDetails from './pages/AuctionDetails.svelte'
    import Login from "./pages/Login.svelte";
    import Register from "./pages/Register.svelte";
    import Profile from "./pages/Profile.svelte";
    import Header from './components/Header.svelte'

    import {tokenStore} from "./stores/tokenStore.js";


    let page
    let params
    let currentRoute;

    router('/laptops', (ctx) => {
        page = Laptops
        currentRoute = ctx.pathname
        params = ctx
    })
    router('/auctions', (ctx) => {
        page = Auctions
        currentRoute = ctx.pathname
    })
    router('/auction/:id', (ctx) => {
        if (!$tokenStore) {
            return router.redirect('/login')
        }

        page = AuctionDetails
        currentRoute = ctx.pathname
        params = ctx.params
    })
    router('/login', (ctx) => {
        page = Login
        currentRoute = ctx.pathname
    })
    router('/register', (ctx) => {
        page = Register
        currentRoute = ctx.pathname
    })
    router('/profile', (ctx) => {
        if (!$tokenStore) {
            return router.redirect('/login')
        }

        page = Profile
        currentRoute = ctx.pathname
    })

    router.start()
</script>

<header>
    <Header active={currentRoute}/>
</header>

<main>
    <section class="main-content">
        <svelte:component this={page} {params}/>
    </section>
</main>

<style>
    @import './root.css';

    header {
        justify-content: center;
    }

    main {
        text-align: center;
        flex-grow: 1;
        background-color: var(--white-background);
    }

    .main-content {
        padding: 1rem;
    }

</style>
