<script lang="ts">
    import loadClients, { clients } from "./apiCall";
    import { type ClientResponse } from "./apiCall";

</script>

<main>
    <p>
        {#each clients as client}
        {client.name} - {client.pets}
        {/each}
    </p>
</main>