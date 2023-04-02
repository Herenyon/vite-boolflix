<script>
export default {
    name: 'SelectMedia'
}

</script>
<template>
    <form>
        <select>
            <option selected> Seleziona un Film o una SerieTv</option>
            <option value="film">Film</option>
            <option value="serietv">Serie Tv</option>
        </select>
    </form>
</template>

<style lang="scss" scoped>
@use '../styles/variables.scss' as *;

select {
    padding: 10px 0;
    border-color: $primary-color;
    border-width: 2px;
    border-radius: 5px;
    background: none;
    padding: 10px 10px;
    color: $text-color-primary;
    height: 40px;

    option {
        background-color: rgb(31, 31, 31);
        border-color: $primary-color;

    }
}
</style>