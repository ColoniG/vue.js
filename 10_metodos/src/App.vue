<template>
  <div>
    <h1 style="font-weight: bolder;">Métodos / Funções</h1>
    <br><br>    
    <PrimeiroComponente />
    <p>O dado de app é: {{ testando }}</p>
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import Pessoa from './components/Pessoa.vue'
  
  export default {
    name: 'App', 
    components: {
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