<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projeto</a></li>
        <li><a href="#">Contatos</a></li>
    </ul>    
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>   /* STYLE só para esse elemento */
    ul {
        list-style: none;
        display: flex;
        background: #111;
    }

    li {
        margin-right: 10px;
    }

    a {
        color: #ddd;
        text-decoration: none;
        transition: .5s;
    }

    a:hover {
        color: turquoise;
    }
</style>