<template>
  <b-navbar type="dark" variant="dark">
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item><router-link to="/contato">Contato</router-link></b-nav-item>
        <b-nav-item><router-link to="/doacao">Doação</router-link></b-nav-item>
        
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">

        <!-- <b-button router-link to="/login">
          <b-icon icon="person-circle"></b-icon> Login
        </b-button> -->

        <b-nav-item v-if="logado == null"><router-link to="/login"><b-icon icon="person-fill"></b-icon> Acesso restrito</router-link></b-nav-item>
        <b-nav-item @click="sair()" v-else>{{ logado.email }} <b-icon icon="power" aria-hidden="true"></b-icon> sair</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  data(){
    return {
      logado: null,
    }
  },
  mounted(){
    this.$firebase.auth().onAuthStateChanged( user => {
      this.logado = user ? user : null
    })
  },
  methods: {
    sair(){
      if(confirm('Tem certeza que deseja sair?')){
        this.$firebase.auth().signOut().then(() => {
          this.logado = null
        }).catch((error) => {
          console.log(error)
        });
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
}

a:hover{
    color: rgb(27, 203, 235);
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

/* ----------------- */
/* -- SMARTPHONES ---*/
/* ----------------- */
@media (min-width: 200px) and (max-width: 500px) {
  a{
    font-size: 0.9em;
  }
}

</style>