<template>
  <span>
    <span class="sr"> Aura </span>
    <span
      v-for="(auraPattern, index) in pattern"
      :key="index"
      v-tab
    >
      <template v-if="aura[index]">
        <span class="sr"> {{ auraName(aura[index]) }} </span>
        <span aria-hidden="true">
          <template v-if="aura[index] === 'blue'"> 🔵 </template>
          <template v-if="aura[index] === 'yellow'"> 🟡 </template>
          <template v-if="aura[index] === 'purple'"> 🟣 </template>
          <template v-if="aura[index] === 'white'"> ⚪ </template>
          <template v-if="aura[index] === 'black'"> ⚫ </template>
        </span>
      </template>

      <template v-else>
        <template v-if="isPatternCorrect({ aura, auraPattern: pattern })">
          <span class="sr"> {{ auraName(auraPattern) }} vide </span>
          <span aria-hidden="true" style="opacity: .3">
            <template v-if="auraPattern === 'blue'"> 🔵 </template>
            <template v-if="auraPattern === 'yellow'"> 🟡 </template>
            <template v-if="auraPattern === 'purple'"> 🟣 </template>
            <template v-if="auraPattern === 'white'"> ⚪ </template>
            <template v-if="auraPattern === 'black'"> ⚫ </template>
          </span>
        </template>

        <template v-else>
          <span class="sr"> Vide </span>
          <span aria-hidden="true"> ⭕ </span>
        </template>
      </template>
    </span>
  </span>
</template>

<script setup>
import { isPatternCorrect } from '../../../utils/fights'
import { aura as auraName } from '../../../utils/french'

const props = defineProps({
  foe: {
    type: Object
  }
})

const aura = $computed(() => props.foe.aura)
const pattern = $computed(() => props.foe.auraPattern)
</script>
