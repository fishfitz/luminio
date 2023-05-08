<template>
  <action
    class="foe"
    @click="$emit('select', foe)"
  >
    <div v-tab>
      {{ foe.name }}
    </div>

    <span class="sr" v-tab>
      <span class="sr"> Intention </span>
      {{ intention(foe.intention?.type) }}
    </span>

    <div v-tab>
      <span class="sr"> Vie </span>
      {{ foe.life }}
      <span aria-label="sur"> / </span>
      {{ foe.maxLife }}
      <span aria-hidden="true"> 🖤 </span>
    </div>

    <aura :foe="foe" />

    <div aria-hidden="true">
      <template v-if="foe.intention?.type === 'aggro'"> 🗡️ </template>
      <template v-if="foe.intention?.type === 'buff'"> 💪 </template>
      <template v-if="foe.intention?.type === 'debuff'"> 👻 </template>
      <template v-if="foe.intention?.type === 'special'"> ✨ </template>
      <template v-if="foe.intention?.type === 'none'"> 💤 </template>
    </div>
  </action>
</template>

<script setup>
import { intention } from '../../../utils/french'
import aura from './aura.vue'

defineProps({
  foe: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
  .foe {
    background-color: white;
    border-radius: 30px;
    width: 500px;
    height: 600px;
    margin: 120px;
    padding: 30px;
    font-size: 36pt;
  }
</style>
