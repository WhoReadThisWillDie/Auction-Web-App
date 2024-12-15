<script>
    import Form from "../components/Form.svelte";
    import InputField from "../components/InputField.svelte";
    import Button from "../components/Button.svelte";
    import Selector from "../components/Selector.svelte";
    import router from "page";
    import {fetchLaptops} from "../api/fetchLaptops.js";
    import {createAuction} from "../api/fetchAuction.js";

    let laptopId;
    let initialPrice;
    let endTime;

    let laptops;

    fetchLaptops().then(data => {
        laptops = data.map(laptop => {
            return {id: laptop.id, name: laptop.name}
        });
    });

    async function handleAddAuction() {
        try {
            await createAuction(parseInt(laptopId), initialPrice, endTime);
            router.redirect('/auctions');
        } catch (error) {
            alert(error.message)
        }
    }
</script>

<Form title="Add Auction" onSubmit={handleAddAuction}>
    <div class="inputs" slot="inputs">
        <p class="label">Laptop:</p>
        <Selector options={laptops} bind:value={laptopId}/>
        <p class="label">Initial price:</p>
        <InputField placeholder="Initial Price" type="number" bind:value={initialPrice} required/>
        <p class="label">End date:</p>
        <InputField placeholder="End Date" type="date" bind:value={endTime} required/>
    </div>
    <div class="buttons" slot="button">
        <Button text="Create" on:click={() => {}}/>
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

