<script>
    import router from 'page'

    import Laptops from './pages/Laptops.svelte'
    import Auctions from './pages/Auctions.svelte'
    import AuctionDetails from './pages/AuctionDetails.svelte'
    import AddAuction from "./pages/AddAuction.svelte";
    import EditAuction from "./pages/EditAuction.svelte";
    import Login from "./pages/Login.svelte";
    import Register from "./pages/Register.svelte";
    import Wins from "./pages/Wins.svelte";
    import Header from './components/Header.svelte'

    import {tokenStore} from "./stores/tokenStore.js";
    import {decodeToken} from "./utils/decodeToken.js";
    import EditLaptop from "./pages/EditLaptop.svelte";
    import AddLaptop from "./pages/AddLaptop.svelte";


    let page
    let params
    let currentRoute;

    router('/laptops', (ctx) => {
        page = Laptops
        currentRoute = ctx.pathname
        params = ctx
    })
    router('/laptops/add', (ctx) => {
        if (!decodeToken($tokenStore)?.isAdmin) {
            return router.redirect('/laptops')
        }

        page = AddLaptop
        currentRoute = ctx.pathname
        params = ctx
    })
    router('/laptops/:id/edit', (ctx) => {
        if (!decodeToken($tokenStore)?.isAdmin) {
            return router.redirect('/laptops')
        }

        page = EditLaptop
        currentRoute = ctx.pathname
        params = ctx.params
    })
    router('/auctions', (ctx) => {
        page = Auctions
        currentRoute = ctx.pathname
    })
    router('/auctions/add', (ctx) => {
        if (!decodeToken($tokenStore)?.isAdmin) {
            return router.redirect('/auctions')
        }

        page = AddAuction
        currentRoute = ctx.pathname
    })
    router('/auctions/:id', (ctx) => {
        page = AuctionDetails
        currentRoute = ctx.pathname
        params = ctx.params
    })
    router('/auctions/:id/edit', (ctx) => {
        if (!decodeToken($tokenStore)?.isAdmin) {
            return router.redirect('/auctions')
        }

        page = EditAuction
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
    router('/wins', (ctx) => {
        if (decodeToken($tokenStore)?.isAdmin) {
            return router.redirect('/laptops')
        }

        page = Wins
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
