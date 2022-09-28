<template>
  <div>
    Time : {{ level.time }} <br/>
    <table role="grid">
      <tbody>
        <tr v-for="(row, rowIndex) in level.map">
          <td v-for="(room, colIndex) in row">
            <action
              :id="isPlayer(rowIndex, colIndex) ? 'last_position' : undefined"
              :key="colIndex"
              :autofocus="isPlayer(rowIndex, colIndex)"
              @click="room.accessible && !room.explored && explore(room)"
              @keyup.enter="room.accessible && !room.explored && explore(room)"
              v-grid:map="{ rowIndex, colIndex }"
              class="room"
              role="gridcell">
              <template v-if="isPlayer(rowIndex, colIndex)"> Dernière position </template>
              <template v-else>
                {{ roomName(room) }}
                {{ room.accessible ? 'Accessible' : 'Inaccessible' }}
              </template>
            </action>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import vGrid from '../utils/directives/vGrid.js'
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
