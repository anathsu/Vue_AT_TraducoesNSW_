<template>
<div>
  <Header />
  <div class="titulo">
    <h1>{{titulo}}</h1>
  </div>
  
    <b-container>
      <router-view />
    </b-container>
  <Footer />
  </div>
</template>

<script>

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";


export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      titulo: "Nintendo Switch Traduções PT-BR",
    };
  },
  mounted() {
    // console.log (this.$firebase)
  }
}
</script>

<style>
body{
  background-color: rgb(246, 246, 246);
}

.titulo{
  text-align: center;
  padding-top: 10px;
}

/* ----------------- */
/* -- SMARTPHONES ---*/
/* ----------------- */
@media (min-width: 200px) and (max-width: 500px) {
  h1{
    font-size: 1.3em;
  }

}

</style>
