<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

function handleInput(e) {
  const { value } = e.target

  emit('update:modelValue', value)
}

function checkInput(event) {
  const array = ['с', 'з', 'к', 'Backspace', 'Delete']

  if (!array.includes(event.key)) {
    event.preventDefault()
  }
}

</script>

<template>
 <input class="base-input" :value="modelValue" @keydown="checkInput" @input="handleInput" placeholder="Test input">
</template>

<style scoped>

</style>