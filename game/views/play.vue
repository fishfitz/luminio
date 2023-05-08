<template>
  <div role="log" aria-live="assertive" aria-relevant="text">
    <!-- State -->
    <state />

    <div class="sr" v-tab>
      Histoire
      Touche d'accès : S
    </div>

    <div :tabgroup="$world.GROUP === 'story'">
      <!-- Special choices -->
      <choice-trinkets v-if="$world.TRINKET_CHOICE" />

      <!-- Deck evolution -->
      <evolve v-else-if="$world.DECK_EVOLUTION" />

      <!-- Regular story -->
      <template v-else>
        <choices v-if="$story.line.choices" />
        <textbox />
      </template>
    </div>
  </div>
</template>

<script setup>
import choiceTrinkets from '../components/play/choice-trinkets.vue'
import evolve from '../components/play/evolve/index.vue'
import textbox from '../components/play/textbox.vue'
import choices from '../components/play/choices.vue'
import state from '../components/state/index.vue'

onMounted(() => {
  $world.focusGroup('story')
})
</script>
