<template>
  <div role="log" aria-live="assertive">
    <action @click="$story.next" class="dialog" autofocus>
      <span v-if="$story.line.speaker"> {{ $story.line.speaker.name }} — </span>
      <div> {{ $story.line.text }} </div>
    </action>

    <ul v-if="$story.line.choices">
      <li v-for="choice in $story.line.choices">
        <action @click="$story.pickChoice(choice)" class="dialog" autofocus>
          {{ choice.text }}
        </action>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
  .dialog {
    display: inline-block;
  }
</style>
