<script>
    export let placeholder;
    export let value;
    export let type = "text";
</script>

{#if type === "text"}
    <input class="input" placeholder={placeholder} bind:value {...$$restProps} />
{:else if type === "password"}
    <input class="input" type="password" placeholder={placeholder} bind:value {...$$restProps}/>
{:else if type === "number"}
    <input class="input" type="number" placeholder={placeholder} bind:value {...$$restProps}/>
{:else if type === "date"}
    <input class="input" type="date" placeholder={placeholder} bind:value {...$$restProps}/>
{/if}

<style>
    @import '../root.css';

    .input {
        padding: 0.5rem;
        border: 0.1rem solid #ccc;
        border-radius: 0.75rem;
        font-size: 1rem;
        min-width: 10rem;
        min-height: 2.5rem;
        box-sizing: border-box;
        width: 100%;
    }

    .input:focus {
        outline: none;
        border-color: var(--blue-hover);
        box-shadow: 0 0 0.25rem var(--blue);
    }
</style>
