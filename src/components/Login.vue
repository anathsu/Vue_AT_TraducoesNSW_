<template>
  <b-row class="bkg block">
    <b-row class="titulo block">
      <h2>Login</h2>
    </b-row>

    <div id="login">
      <form @submit.prevent="autentica()" class="form-login">
        <div>
          <div class="form-group">
            <input class="form-control tc" type="email" v-model="email" placeholder="E-mail" required/>
          </div>

          <div class="form-group">
            <input class="form-control tc" type="password" v-model="password" placeholder="senha" required/>
          </div>
      
          <button class="btn btn-primary w-100" >Entrar</button>
          </div>
      </form>
    </div>
  </b-row>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{
      email: "",
      password: "",
    };

  },
  methods: {
    async autentica() {
      const { email, password} = this

      try {
        const res = this.$firebase.auth().signInWithEmailAndPassword(email, password)

        alert(res)
      } catch (error) {
        alert("Erro: " + error)
      }
      
    },
  },
}
</script>

<style scoped>
.bkg{
  background-color: white;
  padding: 15px;
  min-height: 750px;
}

.titulo{
  padding-top: 10px;
  margin: 0 auto;
}

.block{
  display: block;
}

#login{
  width: 300px;
  margin: 0 auto;
  padding-top: 20px;
}

.tc{
  margin: 0px 0px 5px 0px;
  width: 100%;
}

/* ----------------- */
/* -- SMARTPHONES ---*/
/* ----------------- */
@media (min-width: 200px) and (max-width: 500px) {
  h2{
    font-size: 1.2em;
  }

  h4{
    font-size: 1em;
  }

}

</style>