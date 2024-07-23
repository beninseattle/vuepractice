<script setup>
const emit = defineEmits(['termChange']);
const onInput = (e) => {
  emit('termChange', e.target.value);
};
</script>

<template>
  <div>
    Search videos: <input @input="onInput" />
  </div>
</template>

<style>
</style>