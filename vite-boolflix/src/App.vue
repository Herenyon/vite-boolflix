<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { onBeforeMount, onMounted } from 'vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {

    return {
      store,

    }
  },
  methods: {
    search() {
      axios.get(this.store.config.urlMovie, {
        params: {
          api_key: this.store.config.api_key,
          query: this.store.search
        }
      })
        .then((response) => {
          console.log(response);
          this.store.storeMovie = response.data.results;
          console.log(this.store.storeMovie);

        })
      axios.get(this.store.config.urlTv, {
        params: {
          api_key: this.store.config.api_key,
          query: this.store.search
        }
      })
        .then((response) => {
          // console.log(response);
          this.store.storeTv = response.data.results;
          // console.log(this.store.storeTv);

        })
    },

  },
  created() {
    this.search();

  }

}
</script >


<template>
  <AppHeader @cerca="search" />
  <AppMain />
  <!-- <AppFooter /> -->
</template>

<style lang="scss" scoped>
@use './styles/general.scss' as *;
@use './styles/variables.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap');
</style>
