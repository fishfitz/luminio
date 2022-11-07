<template>
  <div role="presentation">
    <action> Temps : {{ level.time }}, Candelas : {{ $world.CANDELAS }} / {{ $world.MAX_CANDELAS }}, Volonté : {{ $world.WILL }} / 10 </action>
    <div aria-roledescription=" " tabgroup tabkeepcolumn v-for="(row, rowIndex) in level.map">
      <action
        v-for="(room, colIndex) in row"
        :id="isPlayer(rowIndex, colIndex) ? 'last_position' : undefined"
        :key="colIndex"
        :autofocus="isPlayer(rowIndex, colIndex)"
        @click="room.accessible && !room.explored && explore(room)"
        class="room">
        <template v-if="isPlayer(rowIndex, colIndex)"> Dernière position </template>
        <template v-else>
          {{ roomName(room) }}
          {{ room.accessible ? 'Accessible' : 'Inaccessible' }}
        </template>
      </action>
    </div>
  </div>
</template>

<script setup>
import { update, explore, roomName } from '../utils/levels/map'

const level = $computed(() => $world.LEVELS[$world.CURRENT_LEVEL])
const isPlayer = (rowIndex, colIndex) => rowIndex === level.playerPosition[0] && colIndex === level.playerPosition[1]

onMounted(() => {
  update()
  $ui.focus('#last_position')
})
</script>

<style scoped lang="scss">
  .room {
    font-size: x-small;
    display: inline-flex;
    padding: 5px;
    border: 1px solid grey;
    width: 100px;
    height: 100px;
    overflow: hidden;
  }
</style>
