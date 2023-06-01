const MyNameApp = {
    data() {
      return {
        name: "???",
        age: 37,
        input_name: ""
      }
    },
    methods: {      // Onde ficam as FUNÇÕES da aplicação
        submitForm(e) {
                            // não vai deixar o formulário ser enviado para o servidor
            e.preventDefault();  

            console.log(this.input_name);

            this.name = this.input_name;

        }
    }
  }
  
  Vue.createApp(MyNameApp).mount('#app')