<script>
import { store } from '../store';
// import Search from './Search.vue';

export default {
  name: 'AppHeader',
  // components: {
  //   Search
  // },
  data() {
    return {
      store
    }
  }

}


</script>

<template>
  <header>
    <input type="search" id="search" placeholder="Cerca una serieTv o un film">

  </header>
</template>

<style scoped></style>
