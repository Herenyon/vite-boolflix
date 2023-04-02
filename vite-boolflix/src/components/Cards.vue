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
        score: Number,
        overview: String

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

            return Math.ceil(this.score / 2);

        }
    }
}

</script>


<template>
    <a href="#">
        <div class="flip-card-inner">

            <div class="flip-card-front">
                <img :src="img" alt="">
            </div>
            <div class="flip-card-back">

                <h2>{{ title }}</h2>

                <div class="text-format"><strong>Original Title: </strong> {{ original_title }}</div>
                <div class="text-format"><strong>Original Language: </strong>
                    <country-flag :country="getLanguage" size="small" />
                </div>
                <div class="text-format">Vote:
                    {{ getScore }}

                    <!-- <font-awesome-icon :icon="['fas', 'star']" v-for="n in getScore" />
                        <font-awesome-icon :icon="['far', 'star']" /> -->
                </div>
                <div class="text-format">
                    <strong>Plot:</strong>
                    {{ overview }}
                </div>
            </div>

        </div>
    </a>
</template>


<style lang="scss">
@use '../styles/variables.scss' as *;

::-webkit-scrollbar {
    width: 5px
}

::-webkit-scrollbar-track {
    background: #cccccc;
    border-radius: 10px
}

::-webkit-scrollbar-thumb {
    background: $primary-color;
    border-radius: 3px
}



.flip-card {
    background-color: transparent;
    width: 200px;
    height: 300px;

    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;

}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    background-color: #bbb;
    color: black;

    img {

        max-width: 100%;
        height: 300px;
    }



}

/* Style the back side */
.flip-card-back {
    .text-format {
        margin-top: .625rem;
        text-align: left;
        padding: 3px 10px 3px 10px;

    }

    box-shadow: 0px 0px 15px 0px #000000;
    word-wrap: break-word;
    overflow-y: auto;

    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;

    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    transform: rotateY(180deg);
}
</style>