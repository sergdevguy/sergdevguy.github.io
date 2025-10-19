<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const iframeSrc = `/games/easy/${route.params.slug}/index.html`
</script>

<template>
  <div class="game-frame">
    <iframe :src="iframeSrc" frameborder="0"></iframe>
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