<template>
  <div>
    <Introducao />
		<br><br><br><br>

    
    <Header :esta_logado="true" />
    <PrimeiroComponente />
    <p class="paragrafo_pai">O dado de app é: {{ testando }}</p>
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
  import Introducao from './components/Introducao.vue'
  import Header from './components/Header.vue'
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import Pessoa from './components/Pessoa.vue'
  
  
  export default {
    name: 'App', 
    components: {
      Introducao,
      Header,
      PrimeiroComponente,
      LifeCycle,
      Pessoa      
    },
    
    data() {
      return {
        testando: "Teste"
      }
    }
  }
</script>

<style>           /* STYLE GLOBAL */
  body {
    background-color: #333;
    color: #fff;
  }

  a {
    color: red;
  }

  .teste {
    background-color: black;
  }
</style>