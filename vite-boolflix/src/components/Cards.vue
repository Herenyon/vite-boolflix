<script>
export default {
    name: 'Cards',

    props: {
        img: String,
        title: String,
        original_title: String,
        language: String,
        score: Number

    }
}

</script>


<template>
    <img :src="img" alt="">
    <div>{{ title }}</div>
    <div>{{ original_title }}</div>
    <div>{{ language }}</div>
    <div>{{ score }}</div>
</template>


<style lang="scss" scoped></style>