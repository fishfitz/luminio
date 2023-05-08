<template>
  <div role="presentation">
    <state />

    <div class="sr" v-tab>
      Histoire (carte)
      Touche d'accès : S
    </div>

    <div class="map-container centered">
      <div
        v-for="(row, rowIndex) in level.map"
        aria-roledescription=" "
        tabkeepcolumn
        :tabgroup="$world.GROUP === 'story'"
      >
        <room
          v-for="(room, colIndex) in row"
          :key="room.scene"
          :room="room"
          :row="rowIndex"
          :column="colIndex"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { update } from '../utils/levels/map'
import state from '../components/state/index.vue'
import room from '../components/level/room.vue'

const level = $computed(() => $world.LEVELS[$world.CURRENT_LEVEL])

onMounted(() => {
  update()
  $world.GROUP = 'story'
  $ui.focus('#last_position')
})
</script>

<style scoped lang="scss">
.map-container {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>
