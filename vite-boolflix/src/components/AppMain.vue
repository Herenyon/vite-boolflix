<script>
import CardMedia from './CardMedia.vue';
import { store } from '../store';
export default {
    name: 'AppMain',
    components: {
        CardMedia,
    },
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <main>
        <CardMedia />
    </main>
</template>



<style lang="scss" scoped>
@use '../styles/variables.scss' as *;

main {
    color: $text-color-primary;
    height: calc(100vh - 40px);
    background-color: rgb(80, 80, 80);
    padding-top: 140px;
    // padding: 0 80px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}
</style>