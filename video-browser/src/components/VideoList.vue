<script setup>
const props = defineProps(['videos']);
</script>

<template>
  VideoList
  <ul>
    <ul>
      <li v-for="item in props.videos">{{ item }}</li>
    </ul>
  </ul>
</template>

<style>
</style>