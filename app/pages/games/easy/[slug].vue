<script setup lang="ts">
const basePath = import.meta.env.BASE_URL || '/'
</script>

<template>
  <div class="game-frame">
    <iframe :src="`${basePath}games/easy/${$route.params.slug}/index.html`" frameborder="0"></iframe>
  </div>
</template>

<style scoped>
  .game-frame {
    width: 100vw;
    height: 100vh;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>