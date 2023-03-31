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

    }
}

</script>


<template>
    <img :src="img" alt="">
    <div>{{ title }}</div>
    <div>{{ original_title }}</div>
    <country-flag :country="getLanguage" size="small" />
    <div>{{ score }}</div>
</template>


<style lang="scss" scoped></style>