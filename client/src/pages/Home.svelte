<script>
    import Button from "../components/Button.svelte"
    import InputField from "../components/InputField.svelte"
</script>

<Button text="Add bid" callback={() => console.log("Clicked")}/>
<InputField placeholder="Enter text"/>