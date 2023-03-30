<script>

import { store } from '../store';
import Cards from './Cards.vue'
// import CardTv from './CardTv.vue';

export default {
    name: "CardFilm",
    components: {
        Cards
    },
    data() {
        return {
            store,
            imgUrl: 'https://image.tmdb.org/t/p/w300'
        }
    }
}

</script>
<template>
    <div v-for="card in store.storeFilm">
        <Cards :img="imgUrl + card.poster_path" :title="card.title" :original_title="card.original_title"
            :language="card.original_language" :score="card.vote_average" />
    </div>
</template>  

