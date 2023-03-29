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

    }
  },
  methods: {
    search() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=d38948d1024387ecb37857276ef015a7&query=ritorno+al+futuro')
        .then((response) => {
          console.log(response);
          this.store.storeFilm = response.results;

        })
        .catch((error) => {
          console.log(error);
          this.store.cards = [];
          this.store.cardsFound = 0;
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
