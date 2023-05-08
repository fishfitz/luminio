<template>
  <div>
    <div v-if="$world.DECK_EVOLUTION.type === 'add'" v-tab v-focus>
      Choisissez une carte à ajouter à votre deck
    </div>
    <div v-else v-tab v-focus>
      Choisissez une carte pour remplacer {{ $world.DECK_EVOLUTION.selectedCard.name }}
    </div>

    <div class="container">
      <card
        v-for="card in $world.DECK_EVOLUTION.cards"
        :key="card.id"
        :card="card"
        v-tab
      >
        <action v-tab @click="evolve(card)">
          Ajouter
        </action>
      </card>
    </div>
  </div>
</template>

<script setup>
import card from '../partials/card.vue'

const deckReplace = (card) => {
  $world.REMOVE_CARD($world.DECK_EVOLUTION.selectedCard)
  $world.ADD_CARD(card)
}

const deckAdd = (card) => {
  $world.ADD_CARD(card)
}

const evolve = (card) => {
  if ($world.DECK_EVOLUTION.type === 'add') deckAdd(card)
  else deckReplace(card)

  $world.DECK_EVOLUTION = null
  $world.focusGroup('story')
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }
</style>
