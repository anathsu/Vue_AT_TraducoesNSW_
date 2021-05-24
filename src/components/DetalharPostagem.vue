<template>
  <b-row class="todo">
    <b-row class="center">
      <h3>{{ postagem.title }}</h3>
    </b-row>

    <b-row>
      <b-col
        ><img
          class="imagem"
          :src="postagem.img"
        />
      </b-col>

      <b-col class="texto">
        <div>
          <span><b>Equipe: </b></span>
          <span>{{ postagem.equipe }}</span>
        </div>

        <div>
          <span><b>Contato: </b></span>
          <span><a :href="postagem.creditos" target="_blank">Página do Desenvolvedor</a></span>
        </div>

        <div>
          <span><b>Data de modificação: </b></span>
          <span>{{postagem.data}}</span>
        </div>

        <div>
            <b-button
            v-if="postagem.download"
            class="btn"
            :href="postagem.download"
            target="_blank"
            block
            variant="primary"
            >Download</b-button>

            <b-button
            v-else
            class="btn"
            href="#"
            block
            variant="danger"
            disabled
            >Link fora do ar</b-button>
        </div>

      </b-col>
    </b-row>

    <div class="edicao">
      <b-row><h3>Edição</h3></b-row>
      <b-row>
        <b-form @submit="onSubmit" class=".formulario">
          <b-form-group id="input-group-1" label="Título:" label-for="input-1">
            <b-form-input
              id="input-1"
              v-model="postagem.title"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-1" label="URL da Imagem:" label-for="input-2">
            <b-form-input id="input-2" v-model="postagem.img"></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Contato da Equipe"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="postagem.creditos"
              type="text"
              required
              placeholder="site/blog da equipe"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Link para Download"
            label-for="input-5"

          >
            <b-form-input
              id="input-5"
              v-model="postagem.download"
              type="text"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Data da modificação"
            label-for="input-6"

          >
            <b-form-input
              id="input-6"
              v-model="postagem.data"
              type="date"
              placeholder="Data da modificação"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-3"
            label="Equipe de tradução:"
            label-for="input-4"
          >
            <b-form-select
              id="input-4"
              v-model="postagem.equipe"
              :options="equipes"
              required
            ></b-form-select>
          </b-form-group>
          <b-button @click="updatePostagem(postagem)" class="btn outro" type="submit" variant="dark">Editar</b-button>
        </b-form>
      </b-row>
    </div>
    
  </b-row>
</template>


<script>
import { mapActions } from "vuex";

export default {
  name: "DetalharPostagem",
  data() {
    return {
      //capturando a postagem completa de ListaDePostagens
      postagem: this.$route.params.postagem,
      equipes: [
        "Traduções PKG",
        "Zelda Tradução",
        "Team Xeno Traduções",
        "Mafra Team",
        "Heroes Of Time Brasil",
      ],
      data: new Date(),
    };
  },
  methods: {
    ...mapActions(["updatePostagem"]),
    onSubmit(evt) {
      evt.preventDefault();
    },
    created() {
      this.equipes.push(this.postagem.equipe);
    },
  },
};
</script>

<style scoped>
.todo {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: white;
  border-radius:  15px;
}

.imagem{
  width: 600px;
  padding-left: 10px;
  padding-top: 30px;
}

input.form-control{
  width: 500px;
}

.center{
  justify-content: center;
}

.edicao{
  padding-left: 20px;
  padding-top: 30px;
}

.btn{
  width: 90%;
}

.outro{
  margin-bottom: 80px;
}

.texto{
  padding-top: 30px;
}

/* ----------------- */
/* -- SMARTPHONES ---*/
/* ----------------- */
@media (min-width: 200px) and (max-width: 530px) {
  .imagem{
    width: 300px;
  }

  .btn{
    width: 98%;
    margin: 0 auto;
  }

  input.form-control{
    width: 300px;
  }

  .todo{
    margin: 0px;
  }
}

/* ----------------- */
/* ------Tablet----- */
/* ----------------- */
@media (min-width: 768px) and (max-width: 1024px) {
  .imagem{
    width: 450px;
  }

  .todo{
    /* padding: 0px; */
    margin: 0px;
  }
}
</style>