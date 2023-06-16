<template>
  <div>
    <Introducao />
    <br><br><br><br>

    <PrimeiroComponente />
    <p>O dado de app é {{ testando }}</p>
    </div>
</template>

<script>
  import Introducao from './components/Introducao.vue'
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
    
  export default {
    name: 'App', 
    components: {
      Introducao,
      PrimeiroComponente
    },
    data() {
      return {
        testando: 'TESTE'
      }
    }
  }
</script>