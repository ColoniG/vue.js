<template>
    <div>
        <img :src="avatar" :alt="descricao">  <!-- :src... = v-bind:src... -->
        <MudarImagem @mudar-imagem="trocarImagem" />
    </div>
</template>
<script>
    import MudarImagem from './MudarImagem.vue';
    
    export default {
        name: 'Picture',
        components: {
            MudarImagem
        },
        data() {
            return{
                avatar: '/img/avatar.png',
                descricao: 'Gilson Coloni Filho'
            }
        },
        methods: {
            trocarImagem() {
                this.avatar = "/img/avatar2.png"
            }
        }
    }
</script>
