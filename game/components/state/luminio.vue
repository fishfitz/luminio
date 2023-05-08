<template>
  <div id="luminio">
    <span class="sr" v-tab>
      Luminio
      Touche d'accès : L
    </span>
    <div :tabgroup="$world.GROUP === 'luminio'">
      <div class="top">
        <div v-if="items.includes('candelas')" v-tab>
          <span class="sr"> Candelas </span>
          {{ $world.CANDELAS }}
          <span aria-label="sur"> / </span>
          {{ $world.MAX_CANDELAS }}
          <span aria-hidden="true"> 🕯️ </span>
        </div>

        <div v-if="items.includes('will')" v-tab>
          <span class="sr"> Volonté </span>
          {{ $world.WILL }}
          <span aria-label="sur"> / </span>
          10
          <span aria-hidden="true"> 🪬 </span>
        </div>

        <div v-if="items.includes('protection')" v-tab>
          <span class="sr"> Protection  </span>
          <span :aria-label="$world.PROTECTION">
            {{ $world.PROTECTION || '—' }}
          </span>
          <span aria-hidden="true">
            <template v-if="$world.SHIELD === 'blue'"> 🟦 </template>
            <template v-else-if="$world.SHIELD === 'yellow'"> 🟨 </template>
            <template v-else-if="$world.SHIELD === 'purple'"> 🟪 </template>
            <template v-else-if="$world.SHIELD === 'white'"> ⬜ </template>
            <template v-else-if="$world.SHIELD === 'black'"> ⬛ </template>
            <template v-else> 🛡️ </template>
          </span>
          <span v-if="$world.SHIELD" class="sr">
            {{ aura($world.SHIELD) }}
          </span>
        </div>

        <div v-if="items.includes('time')" v-tab>
          <span class="sr"> Temps </span>
          {{ level.time }}
          <span aria-hidden="true"> ⌛ </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { aura } from '../../utils/french'

defineProps({
  items: {
    type: Array,
    default: () => ['candelas', 'will', 'time']
  }
})

const level = $computed(() => $world.LEVELS[$world.CURRENT_LEVEL])
</script>

<style lang="scss" scoped>
  .top {
    position: absolute;
    top: 100px;
    left: 300px;
    text-align: left;
  }
</style>
