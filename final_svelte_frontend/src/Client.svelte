<script lang="ts">
    import  { clients } from "./apiCall";
</script>

<main>
    <p>
        {#each clients as client}
        {client.name} - {client.pets}
        {/each}
    </p>
</main>