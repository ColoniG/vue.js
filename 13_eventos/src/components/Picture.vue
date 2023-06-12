<template>
    <img :src="avatar" :alt="descricao">  <!-- :src... = v-bind:src... -->
</template>
<script>
    export default {
        name: 'Picture',
        data() {
            return{
                avatar: '/img/avatar.png',
                descricao: 'Gilson Coloni Filho'
            }
        }
    }
</script>
