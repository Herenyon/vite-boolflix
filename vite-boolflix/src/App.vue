<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';


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
      urlFilm: 'https://api.themoviedb.org/3/search/movie?api_key=d38948d1024387ecb37857276ef015a7&query=ritorno+al+futuro',
      // urlSearch: 'urlFilm' + 'ritorno+al+futuro'
    }
  },
  methods: {
    search() {
      axios.get(this.urlFilm)
        .then((response) => {
          console.log(response);
          this.store.storeFilm = response;
          console.log(this.store.storeFilm);
        })



    }

  },
  created() {
    this.search();
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style scoped></style>
