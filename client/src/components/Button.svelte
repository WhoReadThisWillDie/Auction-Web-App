<script>
    export let text;
    export let callback;
</script>

<button class="button" on:click={callback}>{text}</button>

<style>
    .button {
        padding: 0.5rem;
        border: none;
        border-radius: 0.75rem;
        font-size: 0.8rem;
        min-width: 6rem;
        min-height: 2.5rem;
        font-weight: bold;
        cursor: pointer;
        color: white;
        background-color: var(--blue);
    }

    .button:hover {
        background-color: var(--blue-dark);
    }
</style>
