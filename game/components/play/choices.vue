<template>
  <div class="container centered">
    <action
      v-for="choice in $story.line.choices"
      :key="choice.text"
      v-tab
      @click="pick(choice)"
    >
      {{ choice.text }}
    </action>
  </div>
</template>

<script setup>
const pick = (choice) => {
  $story.pickChoice(choice)
  $world.focusGroup('story')
}

// TODO
</script>

<style lang="scss" scoped>
  .container {
    background-color: rgba(242, 242, 255, 0.5);
    width: 100%;
    height: 100%;

    .__action__ {
      display: block;
      margin: auto;
      text-align: center;
      background-color: white;
      padding: 50px;
      margin-top: 100px;

      &:first-child {
        margin-top: 300px;
      }
    }
  }
</style>
