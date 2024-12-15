<script>
    import InputField from "./InputField.svelte";
    import Button from "./Button.svelte";
    import {createEventDispatcher} from "svelte";

    let name;
    let lowestPrice;
    let highestPrice;
    let endTime;

    const dispatch = createEventDispatcher();
    async function handleFilter() {
        const filters = {
            laptopName: name,
            lowestPrice: lowestPrice ? parseFloat(lowestPrice) : undefined,
            highestPrice: highestPrice ? parseFloat(highestPrice) : undefined,
            endTime: endTime
        };
        dispatch('filterChange', filters);
    }
</script>

<h2>Filters</h2>
<section class="auction-filters">
    <InputField placeholder="Filter by name" type="text" bind:value={name}/>
    <InputField placeholder="Lowest Price" type="number" bind:value={lowestPrice}/>
    <InputField placeholder="Highest Price" type="number" bind:value={highestPrice}/>
    <InputField placeholder="End Date" type="date" bind:value={endTime}/>
</section>
<Button text="Filter" callback={handleFilter}/>

<style>
    .auction-filters {
        display: flex;
        gap: 1rem;
    }
</style>