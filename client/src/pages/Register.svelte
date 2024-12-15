<script>
    import router from "page";

    import Form from '../components/Form.svelte';
    import InputField from '../components/InputField.svelte';
    import Button from '../components/Button.svelte';

    import {fetchToken} from "../api/fetchToken.js";
    import {tokenStore} from "../stores/tokenStore.js";

    let username = '';
    let password = '';
    let passwordRepeat = '';

    async function handleRegister() {
        try {
            const token = await fetchToken("/users", username, password);
            localStorage.setItem('token', token);
            tokenStore.set(token);
            router.redirect('/laptops')
        } catch (error) {
            alert(error.message);
        }
    }
</script>

<Form title="Register" onSubmit={handleRegister}>
    <div class="inputs" slot="inputs">
        <InputField placeholder="Username" type="text" bind:value={username} required minLength={3} maxLength={20}/>
        <InputField placeholder="Password" type="password" bind:value={password} required minLength={5} maxLength={20}/>
        <InputField placeholder="Repeat password" type="password" bind:value={passwordRepeat} required minLength={5} maxLength={20}/>
    </div>
    <div class="button-container" slot="button">
        <Button text="Register" callback={() => {}}/>
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
