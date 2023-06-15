<template>
    <div>
        <img :src="avatar" :alt="descricao">  <!-- :src... = v-bind:src... -->
        <Reutilizacao />
        <Reutilizacao />
    </div>
</template>
<script>
    import Reutilizacao from './Reutilizacao.vue';

    export default {
        name: 'Picture',
        components: {
            Reutilizacao
        },
        data() {
            return{
                avatar: '/img/avatar.png',
                descricao: 'Gilson Coloni Filho'
            }
        }
    }
</script>
