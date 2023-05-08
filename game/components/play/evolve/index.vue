<template>
  <div class="centered">
    <remove v-if="type === 'remove'"/>

    <!-- Replace second step or add -->
    <add v-else-if="type === 'add' || $world.DECK_EVOLUTION.selectedCard" />

    <!-- Replace first step or upgrade -->
    <upgrade v-else />
  </div>
</template>

<script setup>
import remove from './remove.vue'
import add from './add.vue'
import upgrade from './upgrade.vue'

const type = $computed(() => $world.DECK_EVOLUTION.type)
</script>
