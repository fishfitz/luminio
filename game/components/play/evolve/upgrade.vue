<template>
  <div>
    <div v-tab v-focus>
      Choisissez une carte à remplacer
      <template v-if="$world.DECK_EVOLUTION.type === 'upgrade'">
        ou à améliorer
      </template>
    </div>

    <div class="container">
      <card
        v-for="card in availableCards"
        :key="card.id"
        :card="card"
        v-tab
      >
        <action
          v-tab
          @click="deckSelectForReplace(card)"
        >
          Remplacer
        </action>
        <action
          v-if="$world.DECK_EVOLUTION.type === 'upgrade' && card.upgrade"
          v-tab
          @click="deckUpgrade(card)"
        >
          Améliorer
        </action>
      </card>
    </div>

    <action
      v-if="!$world.FORCE_CHOICE"
      v-tab
      @click="skipDeckChange"
    >
      Ne rien faire
    </action>
  </div>
</template>

<script setup>
import card from '../partials/card.vue'

const availableCards = $computed(() => $world.DECK.filter(c => !c.irremovable).slice(0, 3))

const skipDeckChange = () => {
  $world.DECK_EVOLUTION = null
  $world.focusGroup('story')
}

const deckSelectForReplace = (card) => {
  $world.DECK_EVOLUTION.selectedCard = card
}

const deckUpgrade = (card) => {
  $world.REMOVE_CARD(card)
  $world.ADD_CARD(card.upgrade)
  skipDeckChange()
}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;
  }
</style>
