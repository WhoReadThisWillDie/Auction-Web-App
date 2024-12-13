<script>
    export let placeholder
    let value
</script>

<style>
    .input {
        padding: 0.5rem;
        border: 0.1rem solid #ccc;
        border-radius: 0.75rem;
        font-size: 1rem;
        min-width: 10rem;
        min-height: 2.5rem;
        box-sizing: border-box;
    }

    .input:focus {
        outline: none;
        border-color: var(--blue-hover);
        box-shadow: 0 0 0.25rem var(--blue);
    }
</style>

<input class="input" placeholder={placeholder} bind:value/>