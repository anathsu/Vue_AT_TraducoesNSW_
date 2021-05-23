<template>
    <b-row class="bkg block">
      <b-row class="titulo">
        <h2>Doação</h2>
      </b-row>

      <div class="div-img">
        <b-img class="img" src="https://i.imgur.com/7pKk2e3.png" alt="PIX"></b-img>
      </div>
      
      <b-row class="titulo">
        <p>
          <strong>
            <a href="https://www.streamar.com.br/anathsu" title="Outros meios de doação" target="_blank">Neste link</a></strong> você encontra outras opções para doação.
        </p>
      </b-row>

      <b-row class="titulo">
        <span>
          Sua doação de qualquer quantia nos ajuda a manter nosso site ativo.
        </span>
      </b-row>

      <b-row class="titulo">
        <span>
          Muito obrigado!
        </span>
      </b-row>
  </b-row>
</template>

<script>
export default {
  name: 'Doacao',
}
</script>

<style scoped>
.bkg{
  background-color: white;
  padding: 15px;
  min-height: 750px;
}

.block{
  display: block;
}

.titulo{
  padding-top: 10px;
  margin: 0 auto;
  display: block;
}

.img{
  width: 300px;
}

.div-img{
  padding-top: 30px;
  width: 300px;
  margin: 0 auto;
  /* border: 1px solid black; */
}

a:link {
    /* color: rgb(146, 104, 41); */
    /* font-weight: bolder; */
    text-decoration: none;
  }
  
  a:visited {
    color: blue;
  }
  
  a:hover {
    color: rgb(26, 148, 72);
  }
  
  a:active {
    color: blue;
  }

  .strong{
    font-weight: bolder;
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

  h5{
    font-size: 0.8em;
  }

}

</style>