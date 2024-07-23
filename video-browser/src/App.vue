<script setup>
import { ref } from 'vue';
import SearchBar from './components/SearchBar.vue';
import VideoList from './components/VideoList.vue';
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const videoList = ref([]);

const onTermChange = async (searchTerm) => {
  console.log('termChange: ', searchTerm);
  const searchParams = new URLSearchParams({
      key: API_KEY,
      type: 'video',
      part: 'snippet',
      q: searchTerm
    }).toString();

  console.log('search params: ', searchParams);
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${searchParams}`);
  if (response.ok) {
    const result = await response.json();
    console.log(result);
    videoList.value = result.items.reduce((prev, curr) => {
      return [...prev, curr.snippet.title];
    }, []);
  }
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