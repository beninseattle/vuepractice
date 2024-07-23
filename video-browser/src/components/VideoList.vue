<script setup>
const props = defineProps(['videos']);
</script>

<template>
  VideoList
  <ul>
    <li v-for="item in props.videos">{{ item }}</li>
  </ul>
</template>

<style>
</style>