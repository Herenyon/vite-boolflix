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
            store
        }
    }
}

</script>
<template>
    <div v-for="card in store.storeFilm">
        <Cards :img="'https://image.tmdb.org/t/p/w300/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg'" :name="card.title"
            :type="card.original_language" />
    </div>
</template>  

