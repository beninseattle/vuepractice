<script setup>
import { ref } from 'vue';
import SearchBar from './components/SearchBar.vue';
import VideoList from './components/VideoList.vue';
import { searchYoutube } from './util/fetchHelpers';

const videoList = ref([]);

const onTermChange = async (searchTerm) => {
  console.log('termChange: ', searchTerm);
  const result = await searchYoutube(searchTerm);
  videoList.value = result.items.reduce((prev, curr) => {
    return [...prev, curr.snippet.title];
  }, []);
};
</script>

<template>
  <div>
    <SearchBar @term-change="onTermChange"></SearchBar>
  </div>
  <div>
    <VideoList :videos='videoList' />
  </div>
</template>

<style></style>