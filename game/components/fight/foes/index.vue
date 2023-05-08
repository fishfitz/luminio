<template>
  <div class="foes">
    <div class="sr" v-tab>
      Ennemis
      Touche d'accès : E
    </div>

    <foe
      v-for="(foe, index) in $world.FIGHT_FOES"
      :key="index"
      :id="`foe_${index}`"
      :foe="foe"
      :tabgroup="$world.GROUP === 'foes'"
      @click="$emit('select-foe', foe)"
    />

    <div :tabgroup="$world.GROUP === 'foes'">
      <action
        v-if="selectedCard"
        v-tab
        @click="$emit('select-foe', null)"
      >
        Annuler
      </action>
    </div>
  </div>
</template>

<script setup>
import foe from './foe.vue'

defineProps({
  selectedCard: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>
  .foes {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
    top: 200px;
    right: 400px;
    width: 1500px;
    transform: rotate(45deg);

    * {
      transform: rotate(-45deg);
    }
  }
</style>
