<template>
  <div>
    <h1 style="font-weight: bolder;">DADOS EM COMPONENTES</h1><br><br>

    <PrimeiroComponente />
    <p>O dado de app é {{ testando }}</p>
    </div>
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponente.vue'
    
  export default {
    name: 'App', 
    components: {
      PrimeiroComponente
    },
    data() {
      return {
        testando: 'TESTE'
      }
    }
  }
</script>