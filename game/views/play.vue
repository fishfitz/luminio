<template>
  <div>
    <a @click="$story.next" tabindex="0">
      <span v-if="$story.line.speaker"> {{ $story.line.speaker.name }} — </span>
      <div> {{ $story.line.text }} </div>
    </a>

    <ul v-if="$story.choices">
      <li v-for="choice in $story.choices" tabindex="0">
        <a @click="$story.pickChoice(choice)">
          {{ choice.text }}
        </a>
      </li>
    </ul>

    <view-link to="menu"> Retour au menu </view-link>
  </div>
</template>
