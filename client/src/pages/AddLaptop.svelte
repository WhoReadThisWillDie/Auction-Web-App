<script>
    import Form from "../components/Form.svelte";
    import InputField from "../components/InputField.svelte";
    import Button from "../components/Button.svelte";
    import {createLaptop} from "../api/fetchLaptop.js";
    import router from "page";

    let name;
    let brand;
    let cpu;
    let gpu;
    let ram;
    let ssd;
    let imagePath

    async function handleCreateLaptop() {
        try {
            await createLaptop(name, brand, cpu, gpu, ram, ssd, imagePath);
            router.redirect('/laptops');
        } catch (error) {
            alert(error.message);
        }
    }
</script>

<Form title="Edit Laptop" onSubmit={handleCreateLaptop}>
    <div class="inputs" slot="inputs">
        <p class="label">Name:</p>
        <InputField placeholder="Name" type="text" bind:value={name} required/>
        <p class="label">Brand:</p>
        <InputField placeholder="Brand" type="text" bind:value={brand} required/>
        <p class="label">CPU:</p>
        <InputField placeholder="CPU" type="text" bind:value={cpu} required/>
        <p class="label">GPU:</p>
        <InputField placeholder="GPU" type="text" bind:value={gpu} required/>
        <p class="label">RAM (GB):</p>
        <InputField placeholder="RAM" type="number" bind:value={ram} required/>
        <p class="label">SSD (GB):</p>
        <InputField placeholder="SSD" type="number" bind:value={ssd} required/>
        <p class="label">Image Path:</p>
        <InputField placeholder="Image Path" type="text" bind:value={imagePath} required/>
    </div>
    <div class="buttons" slot="button">
        <Button text="Save" on:click={() => {}}/>
    </div>
</Form>

<style>
    .inputs {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
    }

    .label {
        align-self: flex-start;
    }
</style>