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

          <button class="btn btn-primary w-100">
            Entrar <i class=" fa fa-sign-in-alt"></i>
          </button>
        
          
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

      this.$firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          var user = userCredential.user;
          window.uid = user.uid
          this.$router.push({ name: 'home'})
        })
        .catch((error) => {
          alert("Erro ao tentar logar-se: " + error.code);
        });
    },
  },

}
</script>

<style scoped>
.bkg{
  background-color: white;
  padding: 15px;
  min-height: calc(100vh - 184px);
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
  padding-top: 100px;
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