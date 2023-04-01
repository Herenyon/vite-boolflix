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
    background-color: rgb(80, 80, 80);
    padding: 100px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}
</style>