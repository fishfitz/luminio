<template>
  <div>
    <action
      class="text-container h-centered"
      v-tab
      @click="next"
    >
      <span
        v-if="line.speaker"
        class="speaker"
      >
        {{ line.speaker.name }}
      </span>
      <div
        class="textbox"
        v-html="line.text"
      />
    </action>
  </div>
</template>

<script setup>
// Find last line of type text
const line = $computed(() =>
  $story.journal
    .findLast(({ type }) => type === 'text')
)

const next = () => {
  $story.next()
  $world.focusGroup('story')
}
</script>

<style lang="scss" scoped>
  .text-container {
    bottom: 300px;
  }

  .textbox {
    padding: 50px;
    background-color: white;
    width: 2000px;
    height: 500px;
    font-size: 52pt;
    text-align: justify;
  }

  .speaker {
    position: absolute;
    left: 0;
    top: -200px;
    padding: 40px;
    background-color: white;
    font-size: 52pt;
    text-align: left;
  }
</style>
