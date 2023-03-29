<script>
export default {
    name: 'Cards',
    props: {
        img: String,
        name: String,
        type: String,

    }
}

</script>


<template>
    <img src="img" alt="">
    <div>{{ name }}</div>
    <div>{{ language }}</div>
</template>


<style lang="scss" scoped></style>