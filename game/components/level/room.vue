<template>
  <action
    v-tab
    class="room"
    :id="isPlayer ? 'last_position' : undefined"
    v-focus="isPlayer ? true : undefined"
    @click="(room.accessible || $world.DEBUG_MODE) && !room.explored && explore(room)"
  >
    <div>
      <template v-if="isPlayer">
        Dernière position
      </template>

      <template v-else>
        <template v-if="$world.DEBUG_MODE">
          {{ room.sceneId }}
        </template>

        {{ roomName(room) }}
        {{ room.accessible ? 'Accessible' : 'Inaccessible' }}
      </template>
    </div>
  </action>
</template>

<script setup>
import { explore, roomName } from '../../utils/levels/map'

const props = defineProps({
  room: {
    type: Object
  },
  row: {
    type: Number
  },
  column: {
    type: Number
  }
})

const level = $computed(() => $world.LEVELS[$world.CURRENT_LEVEL])
const isPlayer = $computed(() =>
  props.row === level.playerPosition[0] &&
  props.column === level.playerPosition[1]
)
</script>

<style scoped lang="scss">
  .room {
    position: relative;
    display: inline-flex!important;
    padding: 30px;
    width: 225px;
    height: 225px;
    overflow: hidden;
    background-color: white;
    font-size: 25pt;
    margin: 30px;

    div {
      transform: rotate(45deg);
    }
  }
</style>
