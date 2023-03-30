<script>
import CardFilm from './CardFilm.vue';
import { store } from '../store';
export default {
    name: 'AppMain',
    components: {
        CardFilm,
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
        <CardFilm />
    </main>
</template>



<style lang="scss" scoped></style>