<script setup>
import VideoListItem from './VideoListItem.vue';

const props = defineProps(['videos']);
</script>

<template>
  VideoList
  <ul class="list-group">
    <VideoListItem v-for="item in props.videos" :video="item" :key="item.id" />
  </ul>
</template>

<style>
</style>