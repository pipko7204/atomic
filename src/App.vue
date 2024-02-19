<script setup>
import BaseInput from "./components/BaseInput.vue";
import {ref} from "vue";
import BaseButton from "./components/BaseButton.vue";

const letters = ref()
const result = ref()

const sorts = ['ЗСК', 'ЗКС', 'КЗС', 'КСЗ', 'СКЗ', 'СЗК']

function handleClick(sort) {
  const order = sort.split('').reduce((acc, rec, index) => ({ ...acc, [rec.toLowerCase()]: index + 1 }), {})
  result.value = [...letters.value.split('').sort((a, b) => {
    return order[a] - order[b]
  })]
}

function handleInput(value) {
  result.value = value
}

</script>

<template>
  <div class="container">
  <BaseInput v-model="letters" @update:model-value="handleInput"/>
  <div>
    <BaseButton v-for="sort in sorts" @click="handleClick(sort)" class="base-button">{{sort}}</BaseButton>
  </div>
  <div>
    <template v-for="(letter, index) in result" :key="index">
      <span v-if="letter === 'к'" style="color: red">{{letter}}</span>
      <span v-if="letter === 'с'" style="color: blue">{{letter}}</span>
      <span v-if="letter === 'з'" style="color: green">{{letter}}</span>
    </template>
  </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
