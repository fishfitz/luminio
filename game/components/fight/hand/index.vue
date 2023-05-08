<template>
  <div>
    <div class="sr" v-tab>
      Main
      Touche d'accès : M
    </div>

    <div class="hand h-centered">
      <template v-if="$world.HAND.length">
        <card
          v-for="(card, index) in $world.HAND"
          v-bind="$attrs"
          :key="card.id"
          :id="`card_${index}`"
          :card="card"
          :tabgroup="$world.GROUP === 'hand'"
          @select="$emit('select-card', $event); hoveredCard = null"
          @mouseover="hoveredCard = card"
          @mouseleave="hoveredCard = null"
        />
      </template>

      <div
        v-else
        class="sr"
        id="card_0"
        :tabgroup="$world.GROUP === 'hand'"
      >
        <span v-tab>
          Aucune carte en main
        </span>
      </div>
    </div>

    <div
      v-if="hoveredCard"
      class="centered backdrop"
      aria-hidden="true"
    >
      <card-highlight
        v-bind="$attrs"
        :card="hoveredCard"
        class="card-highlight"
      />
    </div>
  </div>
</template>

<script setup>
import card from './card.vue'
import cardHighlight from '../../play/partials/card.vue'

const hoveredCard = $ref(null)
</script>

<style lang="scss" scoped>
  .hand {
    bottom: 0;
  }

  .backdrop {
    background: radial-gradient(circle, rgba(242, 242, 255, 1) 0%, transparent 100%);
    width: 1200px;
    height: 1200px;
  }

  .card-highlight {
    margin-top: 400px;
  }
</style>
