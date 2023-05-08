<template>
  <div class="centered">
    <trinket
      v-focus
      :trinket="$world.TRINKET_CHOICE"
    />

    <div v-if="$world.TRINKETS.length < 3">
      <action
        v-tab
        @click="addTrinket($world.TRINKETS.length)"
      >
        Ramasser le trésor
      </action>
      <action v-tab @click="skipTrinket()">
        Ignorer le trésor
      </action>
    </div>

    <template v-else>
      <div class="container">
        <trinket
          v-for="(trinket, index) in $world.TRINKETS"
          :key="index"
          :trinket="trinket"
          v-tab
        >
          <action @click="addTrinket(index)">
            Remplacer
            <span class="sr"> {{ trinket.name }} </span>
          </action>
        </trinket>
      </div>
      <action v-tab @click="skipTrinket()">
        Ignorer la relique
      </action>
  </template>
  </div>
</template>

<script setup>
import trinket from './partials/trinket.vue'
import clone from 'just-clone'

const skipTrinket = () => {
  $world.TRINKET_CHOICE = null
  $world.focusGroup('story')
}

const addTrinket = (index) => {
  if ($world.TRINKETS[index]) $world.TRINKETS[index]?.remove?.()
  $world.TRINKETS[index] = clone($world.TRINKET_CHOICE)
  $world.TRINKETS[index]?.add?.()
  skipTrinket()
}
</script>

<style lang="scss" scoped>
  ::v-deep button {
    background-color: white;
    padding: 30px;
    margin: 30px;
  }

  .container {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    margin-bottom: 60px;
  }
</style>
