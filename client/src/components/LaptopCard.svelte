<script>
    import router from "page";
    import Button from "./Button.svelte";
    import {tokenStore} from "../stores/tokenStore.js";
    import {decodeToken} from "../utils/decodeToken.js";
    import {createEventDispatcher} from "svelte";
    import {deleteLaptop} from "../api/fetchLaptop.js";

    export let id
    export let name
    export let brand
    export let cpu
    export let gpu
    export let ram
    export let ssd
    export let image

    let flipped = false;
    const token = $tokenStore ? decodeToken($tokenStore) : undefined;

    const toggleFlip = () => {
        flipped = !flipped;
    };

    const dispatch = createEventDispatcher();
    async function removeLaptop(laptopId) {
        await deleteLaptop(laptopId);
        dispatch('removeLaptop');
    }
</script>


<article
        class="card"
        class:flipped={flipped}
        on:click={toggleFlip}
        on:mouseleave={() => flipped = false}
        tabindex="0">
    <section class="card-inner">
        <section class="card-side card-front">
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <p>{brand}</p>
            {#if token?.isAdmin}
                <section class="buttons">
                    <Button text="Edit" callback={() => router.redirect(`/laptops/${id}/edit`)}/>
                    <Button text="Delete" callback={() => removeLaptop(id)}/>
                </section>
            {/if}
        </section>
        <section class="card-side card-back">
            <h3>{name}</h3>
            <p>Brand: {brand}</p>
            <p>CPU: {cpu}</p>
            <p>GPU: {gpu}</p>
            <p>RAM: {ram}</p>
            <p>SSD: {ssd}</p>
        </section>
    </section>
</article>

<style>
    @import '../root.css';

    .card {
        width: 100%;
        height: 35rem;
        cursor: pointer;
        transition: transform 0.6s, box-shadow 0.3s ease-in-out;
        transform-style: preserve-3d;
        margin-top: 1rem;
        border-radius: 1rem;
        box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.1);
    }

    img {
        background-color: white;
        object-fit: cover;
        width: 100%;
        height: 75%;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }

    .card-inner {
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.6s;
    }

    .card.flipped .card-inner {
        transform: rotateY(180deg);
    }

    .card-side {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
    }

    .card-front {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--blue-light);
        text-align: center;
        border-radius: 1rem;
        transition: box-shadow 0.3s ease-in-out;
    }

    .card-front:hover {
        box-shadow: 0 0 0.5rem var(--blue-dark);
    }

    .card-back {
        background-color: var(--blue-light);
        transform: rotateY(180deg);
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        text-align: center;
        box-shadow: 0 0 0.5rem var(--blue-dark);
        border-radius: 1rem;
        transition: box-shadow 0.3s ease-in-out;
    }

    .card-back:hover {
        box-shadow: 0 0 0.5rem var(--blue-dark);
    }

    .card-front h3, .card-front p {
        margin-block: 0.5rem;
    }

    .card-back h3, .card-back p {
        margin-block: 0;
    }

    h3 {
        font-size: 1.1rem;
    }

    .buttons {
        display: flex;
        gap: 0.5rem;
    }
</style>
