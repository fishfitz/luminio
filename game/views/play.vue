<template>
  <div tabgroup role="log" aria-live="assertive">
    <template  v-if="$world.TRINKET_CHOICE">
      <div tabindex="0">
        {{ $world.TRINKET_CHOICE.name }}
        {{ $world.TRINKET_CHOICE.description }}
      </div>
      <template v-if="$world.TRINKETS.length < 3">
        <action @click="addTrinket($world.TRINKETS.length)"> Ramasser le trésor </action>
        <action @click="skipTrinket()"> Ignorer le trésor </action>
      </template>
      <template v-else>
        <action v-for="(trinket, index) in $world.TRINKETS" :key="index" @click="addTrinket(index)">
          Ramasser le trésor pour remplacer
          {{ trinket.name }} {{ trinket.description }}
        </action>
        <action @click="skipTrinket()"> Ignorer la relique </action>
      </template>
    </template>

    <template v-else-if="$world.DECK_EVOLUTION && !$world.DECK_EVOLUTION.selectedCard">
      <div tabindex="0">
        Choisissez une carte à remplacer <template v-if="$world.DECK_EVOLUTION.type === 'upgrade'"> ou à améliorer</template>
      </div>
      <ul>
        <li v-for="card in $world.DECK_EVOLUTION.cards">
          <div tabindex="0">
            {{ card.name }}
            <template v-if="card.name.toLowerCase().indexOf(aura(card.color).toLowerCase()) === -1">
              ({{ aura(card.color) }})
            </template>
            {{ render(card.description, $world) }}
          </div>
          <action @click="deckSelectCardForReplace(card)">
            Remplacer {{ card.name }}
          </action>
          <action v-if="$world.DECK_EVOLUTION.type === 'upgrade' && card.upgrade" @click="deckUpgrade(card)">
            Améliorer {{ card.name }}
          </action>
        </li>
        <li @click="skipDeckChange">
          Ne rien faire
        </li>
      </ul>
    </template>

    <template v-else-if="$world.DECK_EVOLUTION">
      <div tabindex="0">
        Choisissez une carte pour remplacer {{ $world.DECK_EVOLUTION.selectedCard.name }}
      </div>
      <ul>
        <li v-for="card in $world.DECK_EVOLUTION.cards">
          <action @click="deckReplaceCard(card)">
            {{ card.name }}
            <template v-if="card.name.toLowerCase().indexOf(aura(card.color).toLowerCase()) === -1">
              ({{ aura(card.color) }})
            </template>
            {{ render(card.description, $world) }}
          </action>
        </li>
        <li @click="skipDeckChange">
          Ne rien faire
        </li>
      </ul>
    </template>

    <template v-else>
      <action @click="$story.next" class="dialog" autofocus>
        <span v-if="$story.line.speaker"> {{ $story.line.speaker.name }} — </span>
        <div> {{ $story.line.text }} </div>
      </action>

      <ul v-if="$story.line.choices">
        <li v-for="choice in $story.line.choices">
          <action @click="$story.pickChoice(choice)" class="dialog" autofocus>
            {{ choice.text }}
          </action>
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup>
import clone from 'just-clone'
import random from 'just-random'
import render from '~carni/render'
import { aura } from '../utils/french'
import cards from '../data/cards'

const skipTrinket = () => {
  $world.TRINKET_CHOICE = null
}

const addTrinket = (index) => {
  if ($world.TRINKETS[index]) $world.TRINKETS[index].remove()
  $world.TRINKETS[index] = clone($world.TRINKET_CHOICE)
  $world.TRINKETS[index].add()
  skipTrinket()
}

const skipDeckChange = () => {
  $world.DECK_EVOLUTION = null
}

const deckSelectCardForReplace = (card) => {
  $world.DECK_EVOLUTION.selectedCard = card
  $world.DECK_EVOLUTION.cards = []
  for (let i = 0; i < 3; i++) {
    const eligibleCards = Object.values(cards)
      .filter(({ name, intensity }) => intensity === card.intensity && card.name !== name && !$world.DECK_EVOLUTION.cards.some(c => c.name === name))
    if (eligibleCards.length) $world.DECK_EVOLUTION.cards.push(random(eligibleCards))
  }
}

const deckReplaceCard = (card) => {
  $world.REMOVE_CARD($world.DECK_EVOLUTION.selectedCard)
  $world.ADD_CARD(card)
  skipDeckChange()
}

const deckUpgrade = (card) => {
  $world.REMOVE_CARD(card)
  $world.ADD_CARD(card.upgrade)
  skipDeckChange()
}
</script>

<style scoped lang="scss">
  .dialog {
    display: inline-block;
  }
</style>
