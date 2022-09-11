<template>
  <div>
    <h1> Main menu </h1>
    <template v-if="!$story.isNewGame">
      <view-link to="play">
        Continue
      </view-link>
      <br>
    </template>
    <view-link to="play" @click="$world.NEW_GAME()">
      New game
    </view-link>
    <br>
    <view-link to="credits">
      Credits
    </view-link>

    <br/><br/>
  </div>
</template>
