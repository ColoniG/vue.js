<template>
  <div>
    <Introducao />
		<br><br><br><br>  

    <PrimeiroComponente />
    <p>O dado de app é: {{ testando }}</p>
    <LifeCycle />
  </div>
</template>

<script>
  import Introducao from './components/Introducao.vue'
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
  import LifeCycle from './components/LifeCycle.vue'

  export default {
    name: 'App', 
    components: {
      Introducao,
      PrimeiroComponente,
      LifeCycle
    },
    
    data() {
      return {
        testando: "TESTE"
      }
    }
  }
</script>