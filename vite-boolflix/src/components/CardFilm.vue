<script>

import { store } from '../store';
import Cards from './Cards.vue'
// import CardTv from './CardTv.vue';

export default {
    name: "AppMain",
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
        <CardFilm :img="'https://image.tmdb.org/t/p/w300/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg'" :name="card.data[0].title"
            :language="card[results].original_language" />
    </div>
</template>  

