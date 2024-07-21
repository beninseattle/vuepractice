<template>
  <div>
    Search videos: <input @input="onInput" />
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput: (e) => {
      console.log('emitting: ', e.target.value);
      this.$emit('termChange', e.target.value);
    }
  }
}
</script>

<style>
</style>