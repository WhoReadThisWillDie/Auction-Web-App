<script>
    export let title = 'Login';
    export let onSubmit = () => {};
</script>

<div class="login-form">
    <h2>{title}</h2>
    <form on:submit|preventDefault={onSubmit}>
        <slot name="inputs"></slot>
        <slot name="button"></slot>
    </form>
</div>

<style>
    .login-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 300px;
        margin: auto;
        padding: 2rem;
        background-color: #f9f9f9;
        border-radius: 0.5rem;
        box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    }

    h2 {
        text-align: center;
        margin-bottom: 1rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
