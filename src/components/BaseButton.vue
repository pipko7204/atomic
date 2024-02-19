<script setup>
import { defineEmits } from 'vue'

const emits = defineEmits(['click'])

function handleClick() {
  emits('click')
}
</script>

<template>
<button @click="handleClick">
  <slot />
</button>
</template>

<style scoped>

</style>