<template>
  <div>
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
const API_KEY = 'AIzaSyC_XDSswuLfv62z1MI4YGuqLdW69CKsJKs';

export default {
  name: 'App',
  components: {
    SearchBar
  },
  methods: {
    onTermChange(termChange) {
      console.log('termChange: ', termChange);
    }
  }
};
</script>

<style></style>