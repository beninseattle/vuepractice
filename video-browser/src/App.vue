<script setup>
import { ref } from 'vue';
import SearchBar from './components/SearchBar.vue';
import VideoList from './components/VideoList.vue';
import { searchYoutube } from './util/fetchHelpers';
import { SEARCH_INPUT_UPDATE } from './eventsDefs';

const videoList = ref([]);

const onTermChange = async (searchTerm) => {
  console.log('termChange: ', searchTerm);
  const result = await searchYoutube(searchTerm);
  videoList.value = result.items.reduce((prev, curr) => {
    return [...prev, {
      title: curr.snippet.title,
      id: curr.id.videoId,
      thumbnailUrl: curr.snippet.thumbnails.default.url
    }];
  }, []);
};
</script>

<template>
  <div class="container">
    <SearchBar @[SEARCH_INPUT_UPDATE]="onTermChange"></SearchBar>
    <VideoList :videos='videoList' />
  </div>
</template>

<style></style>