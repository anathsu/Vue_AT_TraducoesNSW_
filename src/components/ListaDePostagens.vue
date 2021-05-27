<template>
  <b-row class="bkg">
    <b-row class="titulo">
      <h2>Home</h2>
    </b-row>
    
    <b-row class="list">
      <b-form-input
      type="text"
      id="text-search"
      size="sm"
      v-model="search"
      placeholder="Busca..."
      v-on:keyup="onSearch"
      ></b-form-input>

      <h4>{{ titulo }}</h4>

      <b-row class="span" v-if="allPostagens < 1">
        <span>Não há nenhuma tradução para mostrar no momento...</span>
      </b-row>
      
      
      <b-card-group deck>
        <b-card
          v-for="postagem in result || allPostagens"
          :key="postagem.id"
          :header="postagem.title"
          header-bg-variant="dark"
          header-text-variant="white"
          align="center"
          class="unitCard"
        >
          <img class="imagem" :src="postagem.img"/>

          <b-card-text><strong>Equipe: </strong>{{ postagem.equipe }}</b-card-text>
        
          
          <router-link
            tag="p"
            :to="{ name: 'postagemDetail', params: { id: postagem._id, postagem: postagem } }"
          >
            <b-button
            class="btn"
            block
            variant="primary"
            >Créditos e Download
          </b-button>

          </router-link>

          <div >
            <b-button
            v-if="logado"
            class="btn"
            @click="deletePostagem(postagem._id)"
            block
            variant="danger"
            >Excluir
            </b-button>
          </div>
          

        </b-card>
      </b-card-group>
    </b-row>

    <b-row class="addPostagem" v-if="this.logado != null">
      <AdicionarPostagem />
    </b-row>

  </b-row>
</template>

<script>
import { mapGetters, mapActions} from "vuex";
import AdicionarPostagem from "./AdicionarPostagem";

export default {
  name: "ListaDePostagens",
  computed: {
    ...mapGetters(["allPostagens"]),
  },
  methods: {
    ...mapActions(["getPostagens", "deletePostagem"]),
    onSearch(){
      this.result = this.allPostagens.filter(x => x.title.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  components: {
    AdicionarPostagem,
  },
  created() {
    this.getPostagens();

    this.$firebase.auth().onAuthStateChanged( user => {
      this.logado = user ? user.uid : null
    })
  },
  mounted(){
    this.$firebase.auth().onAuthStateChanged( user => {
      this.logado = user ? user.uid : null
    })
  },
  data() {
    return {
      titulo: "Títulos encontrados:",
      search: "",
      result: null,
      logado: null,
    };
  },
};
</script>

<style scoped>
.bkg{
  background-color: white;
  padding: 15px;
  min-height: calc(100vh - 184px);
}

.card {
  margin: 15px;
}

.imagem{
  width: 290px;
}

.list {
  margin: 20px;
  width: 100%;
  display: block;
}

.block {
  display: block;
}

.unitCard{
  min-width: 16rem;
  max-width: 21rem;
}

.unitCard:hover{
  border: rgb(59, 59, 59) 2px solid;
}

.addPostagem{
  padding: 0px;
  display: block;
}

input{
  margin-bottom: 30px;
}

.span{
  justify-content: center;
  padding: 20%;
}

.titulo{
  padding-top: 10px;
  margin: 0 auto;
}

/* ----------------- */
/* -- SMARTPHONES ---*/
/* ----------------- */
@media (min-width: 200px) and (max-width: 530px) {

  .unitCard{
    min-width: 17rem;
  }

  .imagem{
    min-width: 180px;
    max-width: 230px;
  }

  .bkg{
    margin: 0px;
  }

  h2{
    font-size: 1.2em;
  }

  h4{
    font-size: 1em;
  }

}

/* ----------------- */
/* ------Tablet----- */
/* ----------------- */
@media (min-width: 768px) and (max-width: 1024px) {

  .unitCard{
      min-width: 17rem;
    }

  .imagem{
    max-width: 240px;
  }
}
</style>