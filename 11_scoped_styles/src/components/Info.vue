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
        <div>
            <button @click="showEmail">{{ textoBotao }}</button>
        </div>
        <p v-show="mostrar_email">Mande mensagem para: {{ email }}</p>
        <p class="teste">Para acessar meu portifólio <a v-bind:href="meu_link" target="blank">basta clicar aqui</a></p>
        <Picture />
    </div>
</template>

<script>
import Picture from './Picture.vue'
    
export default {  
    name: 'Info',
    components: { 
        Picture
    },
    data() {
        return{
            esta_trabalhando: false, 
            mostrar_email: false,
            email: 'gilson@email.com',
            meu_link: 'https://google.com',
            textoBotao: 'Mostrar e-mail'
        }
    },
    methods: {
        showEmail() {
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email) {
                this.textoBotao = 'Mostrar e-mail'
            } else {
                this.textoBotao = 'Ocultar e-mail'
            }
        }
    }
}
</script>

<style>              /* STYLE GLOBAL DE BAIXO PARA CIMA  - não fazer , gera bagunça */
    .paragrafo_pai {
        color: blue;
    }
</style>