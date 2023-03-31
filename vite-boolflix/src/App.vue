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
      urlFilm: "https://api.themoviedb.org/3/search/movie",
      urlTv: "https://api.themoviedb.org/3/search/tv"
    }
  },
  methods: {
    search() {
      axios.get(this.urlFilm, {
        params: {
          api_key: this.store.api_key,
          query: this.store.search
        }
      })
        .then((response) => {
          console.log(response);
          this.store.storeFilm = response.data.results;
          console.log(this.store.storeFilm);

        }),
        axios.get(this.urlTv, {
          params: {
            api_key: this.store.api_key,
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
</script>

<template>
  <AppHeader @cerca="search" />
  <AppMain />
  <AppFooter />
</template>

<style scoped></style>
