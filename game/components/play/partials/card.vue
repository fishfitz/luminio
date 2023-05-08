<template>
  <div class="card">
    <div class="card-body">
      <div>
        <div class="title">
          {{ card.name }}
        </div>

        <div class="title" aria-hidden="true">
          <template v-if="card.color === 'blue'"> 🔵 </template>
          <template v-if="card.color === 'yellow'"> 🟡 </template>
          <template v-if="card.color === 'purple'"> 🟣 </template>
          <template v-if="card.color === 'white'"> ⚪ </template>
          <template v-if="card.color === 'black'"> ⚫ </template>
        </div>

        <div
          v-if="typeof cardCost !== 'undefined'"
          aria-hidden="true"
          class="title"
        >
          <span class="sr"> Coût </span>
          {{ cost }} 🕯️
        </div>

        <div class="description">
          {{ render(card.description, $world) }}
        </div>

        <div class="sr">
          {{ aura(card.color) }}
        </div>
      </div>
    </div>

    <div class="action">
      <slot />
    </div>
  </div>
</template>

<script setup>
import render from '~carni/render'
import { aura } from '../../../utils/french'

const props = defineProps({
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
  .card {
    display: inline-block;
  }

  .card-body {
    background-color: white;
    border: 5px solid #f2f2ff;
    border-radius: 30px;
    width: 400px;
    height: 400px;
    margin: 20px;
    padding: 30px;
  }

  .title {
    font-size: 30pt;
    text-align: center;
    margin-bottom: 30px;
  }

  .description {
    font-size: 25pt;
    text-align: justify;
    margin-bottom: 30px;
  }

  .action {
    margin-bottom: 60px;

    ::v-deep .__action__ {
      font-size: 30pt!important;
      background-color: white;
      margin: 10px;
      padding: 10px;
    }
  }
</style>
