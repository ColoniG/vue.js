<template>
    <img :src="intro" :alt="descricao">
</template>
<script>
    export default {
        name: 'Introducao',
        data() {
            return {
                intro: '/img/intro.png',
                descricao: 'Introdução da Aula'
            }
        }
    }
</script>