<template>
  <action
    class="small-card"
    :disabled="!!selectedCard"
    @click="$emit('select', card)"
  >
    <div v-tab> {{ card.name }} </div>

    <div class="sr" v-tab>
      Coût {{ cost }}
    </div>

    <div class="title" aria-hidden="true">
      <template v-if="card.color === 'blue'"> 🔵 </template>
      <template v-if="card.color === 'yellow'"> 🟡 </template>
      <template v-if="card.color === 'purple'"> 🟣 </template>
      <template v-if="card.color === 'white'"> ⚪ </template>
      <template v-if="card.color === 'black'"> ⚫ </template>
    </div>

    <div class="sr" v-tab>
      {{ render(card.description, $world) }}
    </div>

    <div class="sr" v-tab>
      ({{ aura(card.color) }})
    </div>
  </action>
</template>

<script setup>
import render from '~carni/render'
import { aura } from '../../../utils/french'

const props = defineProps({
  selectedCard: {
    type: Object
  },
  card: {
    type: Object
  },
  cardCost: {
    type: Number
  }
})

const cost = $computed(() =>
  Math.max(
    $world.ALTER('cardCost', props.cardCost, props.card),
    0
  )
)
</script>

<style lang="scss" scoped>
  .small-card {
    display: inline-block;
    border-radius: 30px;
    width: 300px;
    height: 300px;
    background-color: white;
    font-size: 30pt;
    margin: 30px;
    border: 5px solid #f2f2ff;
  }
</style>
