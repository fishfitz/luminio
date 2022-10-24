<template>
  <div tabgroup role="log" aria-live="assertive">

    <!-- Trinkets choice -->
    <template v-if="$world.TRINKET_CHOICE">
      <action autofocus>
        {{ $world.TRINKET_CHOICE.name }}
        {{ $world.TRINKET_CHOICE.description }}
      </action>

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

    <template v-else-if="$world.DECK_EVOLUTION">
      <!-- Remove card from deck -->
      <template v-if="$world.DECK_EVOLUTION.type === 'remove'">
        <action autofocus>
          Choisissez une carte à retirer
        </action>

        <ul>
          <li v-for="card in $world.DECK.filter(card => !card.irremovable)">
            <action @click="deckRemove(card)">
              {{ card.name }}
              <template v-if="card.name.toLowerCase().indexOf(aura(card.color).toLowerCase()) === -1">
                ({{ aura(card.color) }})
              </template>
              {{ render(card.description, $world) }}
            </action>
          </li>
        </ul>
      </template>

      <!-- Replace first step or upgrade -->
      <template v-else-if="$world.DECK_EVOLUTION && !$world.DECK_EVOLUTION.selectedCard && $world.DECK_EVOLUTION.type !== 'add'">
        <action autofocus>
          Choisissez une carte à remplacer <template v-if="$world.DECK_EVOLUTION.type === 'upgrade'"> ou à améliorer</template>
        </action>
        <ul>
          <li v-for="card in $world.DECK.filter(c => !c.irremovable).slice(0, 3)">
            <div tabindex="0">
              {{ card.name }}
              <template v-if="card.name.toLowerCase().indexOf(aura(card.color).toLowerCase()) === -1">
                ({{ aura(card.color) }})
              </template>
              {{ render(card.description, $world) }}
            </div>
            <action @click="deckSelectForReplace(card)">
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

      <!-- Replace second step or add -->
      <template v-else>
        <action v-if="$world.DECK_EVOLUTION.type === 'add'" tabindex="0" autofocus>
          Choisissez une carte à ajouter à votre deck
        </action>
        <action v-else autofocus>
          Choisissez une carte pour remplacer {{ $world.DECK_EVOLUTION.selectedCard.name }}
        </action>
        <ul>
          <li v-for="card in $world.DECK_EVOLUTION.cards">
            <action @click="$world.DECK_EVOLUTION.type === 'add' ? deckAdd(card) : deckReplace(card)">
              {{ card.name }}
              <template v-if="card.name.toLowerCase().indexOf(aura(card.color).toLowerCase()) === -1">
                ({{ aura(card.color) }})
              </template>
              {{ render(card.description, $world) }}
            </action>
          </li>
        </ul>
      </template>
    </template>

    <template v-else>
      <!-- Dialog box -->
      <action @click="$story.next" class="dialog" autofocus>
        <span v-if="$story.line.speaker"> {{ $story.line.speaker.name }} — </span>
        <div> {{ $story.line.text }} </div>
      </action>

      <!-- Choices -->
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
import render from '~carni/render'
import { aura } from '../utils/french'

const skipTrinket = () => {
  $world.TRINKET_CHOICE = null
}

const addTrinket = (index) => {
  if ($world.TRINKETS[index]) $world.TRINKETS[index]?.remove?.()
  $world.TRINKETS[index] = clone($world.TRINKET_CHOICE)
  $world.TRINKETS[index]?.add?.()
  skipTrinket()
}

const skipDeckChange = () => {
  $world.DECK_EVOLUTION = null
}

const deckSelectForReplace = (card) => {
  $world.DECK_EVOLUTION.selectedCard = card
}

const deckReplace = (card) => {
  $world.REMOVE_CARD($world.DECK_EVOLUTION.selectedCard)
  $world.ADD_CARD(card)
  skipDeckChange()
}

const deckAdd = (card) => {
  $world.ADD_CARD(card)
}

const deckRemove = (card) => {
  $world.REMOVE_CARD(card)
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
