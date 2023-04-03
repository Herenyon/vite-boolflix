import { reactive } from 'vue';

export const store = reactive({
    config: {

        api_key: 'd38948d1024387ecb37857276ef015a7',
        urlMovie: "https://api.themoviedb.org/3/search/movie",
        urlTv: "https://api.themoviedb.org/3/search/tv",
    },

    storeMovie: [],
    storeTv: [],

    search: '',

    // filter: ''

});