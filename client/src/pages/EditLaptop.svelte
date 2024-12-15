<script>
    import Form from "../components/Form.svelte";
    import InputField from "../components/InputField.svelte";
    import Button from "../components/Button.svelte";
    import {fetchLaptop, editLaptop} from "../api/fetchLaptop.js";
    import router from "page";

    export let params;

    let name;
    let brand;
    let cpu;
    let gpu;
    let ram;
    let ssd;
    (async () => {
        const laptop = await fetchLaptop(params.id);
        name = laptop.name;
        brand = laptop.brand;
        cpu = laptop.cpu;
        gpu = laptop.gpu;
        ram = laptop.ram.replace("GB", "");
        ssd = laptop.ssd.replace("GB", "");
        return laptop;
    })();

    async function handleEditLaptop() {
        try {
            await editLaptop(params.id, name, brand, cpu, gpu, ram, ssd);
            router.redirect('/laptops');
        } catch (error) {
            alert(error.message);
        }
    }
</script>

<Form title="Edit Laptop" onSubmit={handleEditLaptop}>
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

