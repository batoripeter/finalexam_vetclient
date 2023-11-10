<script lang="ts">
import Client from "./Client.svelte";
import loadClients, { clients } from "./apiCall";

export let inputText=""
</script>

<main>
<h1>Veterinarian admin - clients</h1>

<span><input type="text" bind:value={inputText} placeholder="Type 3+ characters to search">
  
<button on:click={()=>loadClients(inputText)} disabled={inputText.length < 3}>Search</button>

 <Client />

</main>

<style>

</style>
