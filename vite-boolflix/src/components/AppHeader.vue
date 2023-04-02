<script>
import { store } from '../store';
import SelectMedia from './SelectMedia.vue';
// import Search from './Search.vue';

export default {
  name: 'AppHeader',
  components: {
    SelectMedia
  },
  data() {
    return {
      store
    }
  }

}


</script>

<template>
  <header class="header">
    <div>
      <a href="#">
        <img src="../assets/img/Boolflix-logo.png" alt="" class="logo">
      </a>
    </div>
    <div>
      <input type="search" id="search" class="search-bar" placeholder="Cerca una serieTv o un film"
        v-model="this.store.search" v-on:keyup.enter="$emit('cerca')">
    </div>
    <div>
      <SelectMedia />
    </div>


  </header>
</template>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(25, 25, 25);
  padding: .9375rem 30px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;

  div {
    .logo {
      width: 50%;
    }

  }

  div {
    .search-bar {
      width: 37.5rem;
      border-color: $primary-color;
      border-radius: 5px;
      background: none;
      padding: 10px 10px;
      color: $text-color-primary;
      border-width: 2px;
    }

    .search-bar::placeholder {

      color: grey;
    }
  }
}
</style>
