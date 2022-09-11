<template>
  <div>
    Time : {{ $world.LEVELS[$world.CURRENT_LEVEL].time }} <br/>
    <div role="grid" v-for="(row, rowIndex) in $world.LEVELS[$world.CURRENT_LEVEL].map">
      <action
        v-for="(room, colIndex) in row"
        :key="colIndex"
        :autofocus="isPlayer(rowIndex, colIndex)"
        @click="room.accessible && !room.visited && $world.MAP_EXPLORE(room)"
        v-grid:map="{ rowIndex, colIndex }"
        class="room">
        <template v-if="isPlayer(rowIndex, colIndex)"> Luminion </template>
        <template v-else>
          {{ squareName(room) }}
          {{ room.accessible ? 'Accessible' : 'Inaccessible' }}
        </template>
      </action>
    </div>
  </div>
</template>

<script setup>
import vGrid from '../utils/vGrid.js'

const squareName = (room) => {
  switch (room.type) {
    case 'empty':
      return 'Pièce vide'
    case 'nightmare':
      return 'Pièce cauchemar'
  }
  switch (room.intensity) {
    case 1:
      return 'Pièce calme'
    case 2:
      return 'Pièce agitée'
    case 3:
      return 'Pièce déchaînée'
  }
}

const isPlayer = (rowIndex, colIndex) => rowIndex === $world.LEVELS[0].playerPosition[0] && colIndex === $world.LEVELS[0].playerPosition[1]

onMounted(() => {
  $world.MAP_UPDATE()
})
</script>

<style scoped lang="scss">
  .room {
    font-size: small;
    display: inline-block;
    padding: 5px;
    margin: 5px;
    border: 1px solid grey;
    width: 100px;
    height: 100px;
    overflow: hidden;
  }
</style>
