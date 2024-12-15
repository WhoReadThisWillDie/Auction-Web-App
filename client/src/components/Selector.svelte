<script>
    export let options = [];

    export let value

    const handleSelection = (event) => {
        value = event.target.value;
    };
</script>

<div>
    <select class="input" on:change={handleSelection} required>
        <option value="" disabled selected>Choose an option</option>
        {#each options as option}
            <option value={option.id}>{option.name}</option>
        {/each}
    </select>
</div>

<style>
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
