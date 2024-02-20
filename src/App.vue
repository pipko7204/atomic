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
    <BaseButton  @click="handleClick('ЗСК')" class="base-button b1">ЗСК</BaseButton>
    <BaseButton  @click="handleClick('ЗКС')" class="base-button b2">ЗКС</BaseButton>
    <BaseButton  @click="handleClick('КЗС')" class="base-button b3">КЗС</BaseButton>
    <BaseButton  @click="handleClick('КСЗ')" class="base-button b4">КСЗ</BaseButton>
    <BaseButton  @click="handleClick('СКЗ')" class="base-button b5">СКЗ</BaseButton>
    <BaseButton  @click="handleClick('СЗК')" class="base-button b6">СЗК</BaseButton>
  </div>
  <div>
    <span class="letters" v-for="(letter, index) in result" :key="index">
      <span class="red" v-if="letter === 'к'" style="color: red">{{letter}}</span>
      <span class="blue" v-if="letter === 'с'" style="color: blue">{{letter}}</span>
      <span class="green" v-if="letter === 'з'" style="color: green">{{letter}}</span>
    </span>
  </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }
</style>
