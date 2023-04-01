<script>
import CountryFlag from 'vue-country-flag-next'

export default {
    name: 'Cards',
    components: {
        CountryFlag
    },
    props: {
        img: String,
        title: String,
        original_title: String,
        language: String,
        score: Number

    },
    computed: {
        getLanguage() {
            switch (this.language) {
                case 'en':
                    return 'gb';
                    break;
                case 'he':
                    return 'il';
                    break;
                default:
                    return this.language;
            }
        },

        getScore() {

            return Math.ceil(this.score / 2)
        }
    }
}

</script>


<template>
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <img :src="img" alt="">
        </div>
        <div class="flip-card-back">
            <div>{{ title }}</div>
            <div>{{ original_title }}</div>
            <country-flag :country="getLanguage" size="small" />
        </div>
        <!-- <div>
                           <font-awesome-icon icon="fa-solid fa-star" v-for="n in getScore" />
                               <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getScore" />
                           </div> -->
    </div>
</template>


<style lang="scss">
// .flip-card {
//     background-color: transparent;
//     width: 300px;
//     height: 200px;
//     border: 1px solid #f1f1f1;
//     perspective: 1000px;



//     .flip-card-inner {
//         position: relative;
//         width: 100%;
//         height: 100%;
//         text-align: center;
//         transition: transform 0.8s;
//         transform-style: preserve-3d;



//         .flip-card-front {
//             background-color: #bbb;
//             color: black;

//             img {
//                 width: 100%;
//                 height: 100%;
//             }
//         }

//         .flip-card-back {
//             background-color: dodgerblue;
//             color: white;
//             transform: rotateY(180deg);
//         }

//         .flip-card-front,
//         .flip-card-back {
//             position: absolute;
//             width: 100%;
//             height: 100%;

//             backface-visibility: hidden;
//         }
//     }

//     .flip-card:hover .flip-card-inner {
//         transform: rotateY(180deg);
//     }


// }
</style>