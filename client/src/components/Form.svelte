<script>
    export let title;
    export let onSubmit = () => {};
</script>

<div class="form-container">
    <h2>{title}</h2>
    <form on:submit|preventDefault={onSubmit}>
        <slot class="inputs" name="inputs"></slot>
        <slot class="button" name="button"></slot>
    </form>
</div>

<style>
    .form-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
    }

    h2 {
        text-align: center;
        margin-bottom: 1rem;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
</style>
