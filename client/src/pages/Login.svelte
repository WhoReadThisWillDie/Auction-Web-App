<script>
    import router from "page";

    import Form from '../components/Form.svelte';
    import InputField from '../components/InputField.svelte';
    import Button from '../components/Button.svelte';

    import {fetchToken} from "../api/fetchToken.js";
    import {tokenStore} from "../stores/tokenStore.js";

    let username = '';
    let password = '';

    async function handleLogin() {
        try {
            const token = await fetchToken("/tokens" , username, password);
            localStorage.setItem('token', token);
            tokenStore.set(token);
            router.redirect('/laptops')
        } catch (error) {
            alert(error.message);
        }
    }
</script>

<Form title="Login" onSubmit={handleLogin}>
    <div class="inputs" slot="inputs">
        <InputField placeholder="Username" type="text" bind:value={username} required/>
        <InputField placeholder="Password" type="password" bind:value={password} required/>
    </div>
    <div class="button-container" slot="button">
        <p>Don't have an account yet? <a href="/register">Register</a></p>
        <Button text="Login" callback={() => {}}/>
    </div>
</Form>

<style>
    .inputs {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 40%;
    }
</style>
