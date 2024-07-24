<script setup>
import { toRefs } from 'vue';

const props = defineProps(['video']);
const { video } = toRefs(props);
</script>

<template>
  <li class="list-group-item ">
    <img class="img-thumbnail" :src="video.thumbnailUrl" :alt="video.title" />
    <div class="">{{ video.title }}</div>
  </li>
</template>
 
<style scoped>
li {
  display: flex;
  align-items: center;
  cursor: pointer; 

  &:hover {
    background-color: #eee;
  }

  img {
    margin: 0 1em 0 0;
  }
}
</style>