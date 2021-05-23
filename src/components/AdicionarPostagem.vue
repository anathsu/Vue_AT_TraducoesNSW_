<template>
  <b-row class="block">
    <h3>Adicionar Postagem</h3>

    <b-row class="formu">
      <b-form inline>
        <label class="sr-only" for="nome-jogo">Nome do Jogo</label>
        <b-form-input
          id="nome-jogo"
          class="mb-1 mr-sm-1 mb-sm-0"
          placeholder="Nome do jogo"
          v-model="title"
        ></b-form-input>

        <label class="sr-only" for="inline-form-input-username">Equipe de Tradução</label>
        <b-input-group class="mb-1 mr-sm-1 mb-sm-0">
          <b-form-input
            id="inline-form-input-username"
            placeholder="Nome da Equipe"
            v-model="equipe"
          ></b-form-input>
        </b-input-group>

        <label class="sr-only" for="imagem">Url da Imagem</label>
        <b-form-input
          id="imagem"
          class="mb-1 mr-sm-1 mb-sm-0"
          placeholder="Url da imagem"
          v-model="img"
        ></b-form-input>

        <label class="sr-only" for="equipe">Contato da Equipe de Tradução</label>
        <b-form-input
          id="equipe"
          class="mb-1 mr-sm-1 mb-sm-0"
          placeholder="Site da equipe"
          v-model="creditos"
        ></b-form-input>

        <label class="sr-only" for="url-downlaod">URL do Download</label>
        <b-form-input
          id="url-downlaod"
          class="mb-1 mr-sm-1 mb-sm-0"
          placeholder="Url do Download"
          v-model="download"
        ></b-form-input>

        <b-button variant="primary" @click="createPostagem()">Enviar</b-button>
      </b-form>
    </b-row>
  </b-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AdicionarPostagem",
  data() {
    return { 
      title: "", 
      equipe: "", 
      img: "", 
      creditos: "", 
      download: "",
      data: new Date()
      };
  },
  computed: mapGetters(["allPostagens"]),
  methods: {
    ...mapActions(["addPostagem", "getPostagens"]),
    createPostagem(){
      let newPostagem = {
        // "id": (this.allPostagens.length + 1),
        "title": this.title,
        "img": this.img,
        "equipe": this.equipe,
        "creditos": this.creditos,
        "download": this.download,
        "data": `${this.data.getDate()}/${this.data.getMonth()+1}/${this.data.getFullYear()}`
      }

      this.addPostagem(newPostagem)
      alert('Postagem adicionada com sucesso!')
    }
  },
};
</script>

<style scoped>
.block {
  display: block;
  padding-left: 52px;
}

.bkg{
  background-color: white;
  justify-content: center;
  border-radius:  15px;
}

.formu{
  padding-left: 10px;
  padding-bottom: 50px;
}

/* ----------------- */
/* -- SMARTPHONES ---*/
/* ----------------- */
@media (min-width: 200px) and (max-width: 500px) {
  .block{
    /* width: 50%; */
    padding-left: 30px;
  }

  h3{
    font-size: 1.1em;
  }

  .formu{
    width: 90%;
    margin: 0 auto;
    margin: 0;
  }
}

/* ----------------- */
/* ------Tablet----- */
/* ----------------- */
@media (min-width: 768px) and (max-width: 1024px) {
  .block{
    /* width: 50%; */
    padding-left: 55px;
  }

  .formu{
    width: 90%;
    margin: 0 auto;
    margin: 0;
  }
}
</style>