<template>
  <div>
    <Introducao />
    <br><br><br><br>

    <PrimeiroComponente />
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
    }
  }
</script>