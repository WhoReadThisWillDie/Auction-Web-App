<script>
    import router from 'page'

    import Home from './pages/Home.svelte'
    import About from './pages/About.svelte'
    import Header from './components/Header.svelte'

    let page
    let params
    let currentRoute

    router('/laptops', (ctx) => {
        page = Home
        currentRoute = ctx.pathname
    })
    router('/auctions', (ctx) => {
        page = About
        console.log(ctx)
        currentRoute = ctx.pathname
        params = ctx
    })

    router.start()
</script>

<header>
    <Header active={currentRoute}/>
</header>

<main>
    <svelte:component this={page} {params}/>
</main>

<style>
    header {
        justify-content: center;
    }

    main {
        text-align: center;
        padding: 1rem;
    }
</style>
