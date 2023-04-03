<script>

import { computed } from '@vue/reactivity';
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
            imgUrl: 'https://image.tmdb.org/t/p/w342',

        }
    }
    // computed: {
    //     getImg() {
    //         switch (this.img) {
    //             case this.img === 'https://image.tmdb.org/t/p/w342undefined ':
    //                 return this.img = this.imgNotFound;
    //                 break;
    //             default:
    //                 return "imgUrl + card.poster_path"
    //         }

    //     },
    // }
}

</script>
<template>
    <div v-for="card in store.storeMovie" class="flip-card">
        <!-- card per media senza poster  -->
        <!-- <Cards :img="this.imgNotFound" :title="card.title || card.name"
                    :original_title="card.original_title || card.original_name" :language="card.original_language"
                    :score="card.vote_average" :overview="card.overview" v-if="card.poster_path === undefined" /> -->
        <!-- card per media con poster  -->
        <Cards :img="imgUrl + card.poster_path" :title="card.title || card.name"
            :original_title="card.original_title || card.original_name" :language="card.original_language"
            :score="card.vote_average" :overview="card.overview" />
    </div>
</template>  

<style lang="scss" scoped></style>