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



<style lang="scss" scoped></style>