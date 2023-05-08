<template>
  <div>
    <settings v-if="items.includes('settings')" />
    <luminio v-if="items.includes('luminio')" :items="luminioItems"/>

    <div class="v-centered left">
      <trinkets v-if="items.includes('trinkets')" />
    </div>

    <div class="v-centered right">
      <deck v-if="items.includes('deck')" />
      <journal v-if="items.includes('journal')" />
    </div>
  </div>
</template>

<script setup>
import settings from './settings.vue'
import luminio from './luminio.vue'
import trinkets from './trinkets.vue'
import deck from './deck.vue'
import journal from './journal.vue'

defineProps({
  items: {
    type: Array,
    default: () => ['settings', 'luminio', 'trinkets', 'deck']
  },
  luminioItems: {
    type: Array
  }
})
</script>

<style lang="scss" scoped>
  .left {
    left: 0;
  }

  .right {
    right: 0;
  }

</style>
