<template>
  <div>
    <Introducao />
		<br><br><br><br>
    
    
    <PrimeiroComponente />
    <p>O dado de app é: {{ testando }}</p>
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
  import Introducao from './components/Introducao.vue'
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'
  import Pessoa from './components/Pessoa.vue'
  
  export default {
    name: 'App', 
    components: {
      Introducao,
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