<template>
  <div
    class="container"
    role="application"
    aria-roledescription=" "
  >
    <div
      id="game"
      class="centered"
      :style="style"
    >
      <router-view />
    </div>
  </div>
</template>

<script setup>
import './assets/style/main.scss'
import { watch, nextTick } from 'vue'
import { useWindowSize } from '@vueuse/core'
const { width, height } = $(useWindowSize())

let style = $ref('')

const worldWidth = 3840
const worldHeight = 2160

watch(() => [width, height], () => {
  nextTick(() => {
    const factor = Math.min(width / worldWidth, height / worldHeight)
    style = `
      width: ${worldWidth}px;
      height: ${worldHeight}px;
      transform: translate(-50%, -50%) scale(${factor}, ${factor});
    `
  })
}, { immediate: true })
</script>

<style lang="scss" scoped>
  #game {
    background-color: #f2f2ff;
    overflow: hidden;
  }
</style>
