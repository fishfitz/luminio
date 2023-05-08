<template>
  <div class="trinket">
    <div class="trinket-body">
      <div>
        <div class="title">
          {{ trinket.name }}
        </div>

        <div class="description">
          {{ render(trinket.description, $world) }}
        </div>
      </div>
    </div>

    <div class="action">
      <slot />
    </div>
  </div>
</template>

<script setup>
import render from '~carni/render'

defineProps({
  trinket: {
    type: Object
  }
})
</script>

<style lang="scss" scoped>
  .trinket {
    display: inline-block;
  }

  .trinket-body {
    background-color: white;
    border-radius: 30px;
    width: 500px;
    height: 500px;
    margin: 20px;
    padding: 30px;
  }

  .title {
    font-size: 30pt;
    text-align: center;
    margin-bottom: 30px;
  }

  .description {
    font-size: 25pt;
    text-align: justify;
    margin-bottom: 30px;
  }

  .action {
    margin-bottom: 60px;

    ::v-deep .__action__ {
      font-size: 30pt!important;
      background-color: white;
      margin: 10px;
      padding: 10px;
    }
  }
</style>
