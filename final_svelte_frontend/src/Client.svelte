<script lang="ts">
    import  {clients } from "./apiCall";
</script>

<main>
    <p>
        {#if clients}
        {#each clients as client}
        {client.name} - {client.pets}
        {/each}
        {/if}
    </p>
</main>