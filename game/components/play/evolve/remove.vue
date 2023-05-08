<template>
  <div>
    <div v-tab v-focus>
      Choisissez une carte à retirer
    </div>

    <div class="container">
      <card
        v-for="card in $world.DECK.filter(card => !card.irremovable)"
        :key="card.id"
        :card="card"
        v-tab
      >
        <action v-tab @click="deckRemove(card)">
          Retirer
        </action>
      </card>
    </div>
  </div>
</template>

<script setup>
import card from '../partials/card.vue'

const deckRemove = (card) => {
  $world.REMOVE_CARD(card)
  $world.DECK_EVOLUTION = null
  $world.focusGroup('story')
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 60px;
    height: 1600px;
    overflow: auto;
  }
  </style>
