<template>
  <div>
    <action
      class="button"
      @click="showJournal = !showJournal"
    >
      📖
    </action>

    <teleport to="#game">
      <div
        class="backdrop centered"
        :class="{ sr: !showJournal }"
        @click="showJournal = !showJournal"
      >
        <div class="sr" v-tab>
          Journal
          Touche d'accès : J
        </div>
        <div
          class="journal centered"
          :aria-live="$world.FIGHT_TURN ? 'assertive' : 'off'"
          aria-relevant="additions"
          tabstartlast
          :tabgroup="$world.GROUP === 'journal'"
          @click.stop
        >
          <div
            v-for="(line, index) in logs"
            :key="line.id"
            :id="index === logs.length - 1 ? 'journal' : undefined"
            :style="{ height: logs.length - index < 10 ? 'auto' : '0px' }"
            v-tab
          >
            {{ line.text }}
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
import { findLast } from '../../utils/common'

const logs = $computed(() => $story.journal
  .slice(findLast($story.journal, l => l.type !== 'log') + 1))

const showJournal = $ref(false)
</script>

<style lang="scss" scoped>
  .button {
    display: inline-block;
    background-color: white;
    width: 250px;
    height: 250px;
    line-height: 250px;
    margin: 20px;
  }

  .backdrop {
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(242, 242, 255, 0.5);
  }

  .journal {
    display: inline-block;
    width: 1980px;
    height: 1480px;
    background: white;
    overflow: auto;
    padding: 50px;
    text-align: justify;
    font-size: 40pt;

    div {
      overflow: hidden;
    }
  }
</style>
