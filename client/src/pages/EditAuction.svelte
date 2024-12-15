<script>
    import Form from "../components/Form.svelte";
    import InputField from "../components/InputField.svelte";
    import Button from "../components/Button.svelte";
    import router from "page";
    import {fetchAuction, editAuction} from "../api/fetchAuction.js";

    export let params;

    let laptopName;
    let initialPrice;
    let endTime;
    (async () => {
        const auction = await fetchAuction(params.id);
        laptopName = auction.laptopName;
        initialPrice = auction.initialPrice;
        endTime = auction.endTime;
        return auction;
    })();

    async function handleEditAuction() {
        try {
            await editAuction(params.id, initialPrice, endTime);
            router.redirect('/auctions');
        } catch (error) {
            alert(error.message);
        }
    }

    function handleCancel() {
        router.redirect('/auctions');
    }
</script>

<Form title="Edit Auction for {laptopName}" onSubmit={handleEditAuction}>
    <div class="inputs" slot="inputs">
        <p class="label">Initial price:</p>
        <InputField placeholder="Initial Price" type="number" bind:value={initialPrice} required/>
        <p class="label">End date:</p>
        <InputField placeholder="End Date" type="date" bind:value={endTime} required/>
    </div>
    <div class="buttons" slot="button">
        <Button text="Save" on:click={handleEditAuction}/>
    </div>
    <Button text="Cancel" on:click={handleCancel}/>
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

