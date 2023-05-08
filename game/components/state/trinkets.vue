<template>
  <div
    class="container"
    :tabgroup="$world.GROUP === 'luminio' && $world.TRINKETS.length"
  >
    <div v-for="trinket in trinkets" class="trinket">
      <div v-if="trinket" v-tab>
        <div class="centered title">
          {{ trinket.name }}
        </div>

        <div class="description v-centered">
          {{ render(trinket.description, $world) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import render from '~carni/render'

// Add empty slots
const trinkets = $computed(() =>
  [...$world.TRINKETS, null, null, null].slice(0, 3)
)
</script>

<style lang="scss" scoped>
  .container {
    left: 50px;
    display: flex;
    flex-direction: column;
  }

  .trinket {
    position: relative;
    display: inline-block;
    background-color: white;
    width: 250px;
    height: 250px;
    margin: 20px;

    &:hover .description {
      opacity: 1;
    }
  }
  .title {
    font-size: 30pt;
    text-align: center;
    margin-bottom: 30px;
  }

  .description {
    opacity: 0;
    font-size: 25pt;
    text-align: justify;
    margin-bottom: 30px;
    height: 210px;
    right: -580px;
    width: 540px;
    background-color: white;
    padding: 20px;
    overflow: auto;
  }
</style>
