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
            imgNotFound: '../src/assets/img/poster-not-found.png'
        }
    }
    //     computed: {
    //         getImg() {
    //             switch (this.store.storeMedia.results.poster_path) {
    //                 case 'undefined':
    //                     return this.img = ;
    //                     break;
    //                 default:
    //                     return this.img
    //             }

    //         },
    //     }
}

</script>
<template>
    <div v-for="card in store.storeMedia" classs="flip-card">
        <Cards :img="imgUrl + card.poster_path" :title="card.title || card.name"
            :original_title="card.original_title || card.original_name" :language="card.original_language"
            :score="card.vote_average" />
    </div>
</template>  

<style lang="scss" scoped>
.flip-card {
    background-color: transparent;
    width: 300px;
    height: 200px;
    border: 1px solid #f1f1f1;
    perspective: 1000px;



    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;



        .flip-card-front {
            background-color: #bbb;
            color: black;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .flip-card-back {
            background-color: dodgerblue;
            color: white;
            transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;

            backface-visibility: hidden;
        }
    }

    .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
    }


}
</style>