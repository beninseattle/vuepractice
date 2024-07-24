<script setup>
import { SEARCH_INPUT_UPDATE } from '@/eventsDefs';

const emit = defineEmits([SEARCH_INPUT_UPDATE]);
const onInput = (e) => {
  emit(SEARCH_INPUT_UPDATE, e.target.value);
};
</script>

<template>
  <div>
    <input @input="onInput" />
  </div>
</template>

<style scoped>
  input {
    width: 75%;
  }
  div {
    text-align: center;
    margin: 20px;
  }
</style>