<script>
    import { writable } from 'svelte/store';
    import LoginForm from '../components/LoginForm.svelte';
    import InputField from '../components/InputField.svelte';
    import Button from '../components/Button.svelte';

    export const token = writable(null);

    let username = '';
    let password = '';

    async function handleLogin() {
        const response = await fetch('http://localhost:3000/tokens', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            token.set(data.token);
            console.log(data.token)
        } else {
            console.error('Login failed');
        }
    }
</script>

<LoginForm title="Login" onSubmit={handleLogin}>
    <div slot="inputs">
        <InputField placeholder="Username" bind:value={username} />
        <InputField placeholder="Password" bind:value={password} />
    </div>
    <div slot="button">
        <Button text="Login" callback={handleLogin} />
    </div>
</LoginForm>
