<script>
    import router from "page";

    import Form from '../components/Form.svelte';
    import InputField from '../components/InputField.svelte';
    import Button from '../components/Button.svelte';

    import {fetchToken} from "../api/fetchToken.js";
    import {decodeToken} from "../utils/decodeToken.js";
    import {tokenStore} from "../stores/tokenStore.js";

    let username = '';
    let password = '';
    let passwordRepeat = '';

    async function handleRegister() {
        try {
            const token = await fetchToken("/users", username, password);
            localStorage.setItem('token', token);
            tokenStore.set(decodeToken(token));
            router.redirect('/profile')
        } catch (error) {
            alert(error.message);
        }
    }
</script>

<Form title="Register" onSubmit={handleRegister}>
    <div class="inputs" slot="inputs">
        <InputField placeholder="Username" bind:value={username}/>
        <InputField placeholder="Password" bind:value={password}/>
        <InputField placeholder="Repeat password" bind:value={passwordRepeat}/>
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
