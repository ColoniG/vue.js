<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias</p>
        <ul>
            <li>JavaScript</li>
            <li>Python</li>
            <li>PHP</li>
        </ul>
        <p v-show="mostrar_email">Mande mensagem para: {{ email }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Info',
        data() {
            return{
                esta_trabalhando: false, 
                mostrar_email: q,
                email: 'gilson@email.com'
            }
        }
    }
</script>