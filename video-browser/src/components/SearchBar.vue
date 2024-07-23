<script setup>
const emit = defineEmits(['termChange']);
const onInput = (e) => {
  emit('termChange', e.target.value);
};
</script>

<template>
  <div>
    <label for="">Search videos: <input @input="onInput" /></label>
  </div>
</template>

<style>
</style>