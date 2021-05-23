<template>
  <b-row class="block bkg">
    <b-row class="titulo">
      <h2>Contato</h2>
    </b-row>

    <b-row>
      <form action="https://formspree.io/xjvaqjpq" method="POST" variant="primary" class="formulario">
        <b-form-input class="form-control tc" type="text" name="nome" id="nome" placeholder="Digite seu nome" required></b-form-input>
     
        <b-form-input class="form-control tc" type="email" name="email" id="email" placeholder="Digite seu email" required></b-form-input>
      
        <b-form-input class="form-control tc" type="text" name="assunto" id="assunto" placeholder="Assunto" required></b-form-input>
              
        <b-form-textarea class="form-control tc"  name="mensagem" id="mensagem"
        placeholder="Deixe uma dúvida, crítica ou sugestão de tradução."
        cols="30" rows="4" required></b-form-textarea>

        <input class="btn tc btn-danger" type="reset" value="Apagar">
        <input class="btn tc btn-primary" formtarget="_blank" type="submit" value="Enviar">
            
      </form>
    </b-row>
      
    
  </b-row>
</template>

<script>
export default {
  name: 'Contato',
}
</script>

<style scoped>
.bkg{
  background-color: white;
  padding: 15px;
  min-height: 750px;
}

.formulario{
  padding-top: 30px;
  width: 40%;
  margin: 0 auto;
}

.titulo{
  padding-top: 10px;
  margin: 0 auto;
  display: block;
}

.block{
  display: block;
}

input{
  width: 45%;
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

  .formulario{
    width: 80%;
  }

}

/* ----------------- */
/* ------Tablet----- */
/* ----------------- */
@media (min-width: 768px) and (max-width: 1024px) {
  .formulario{
    width: 70%;
  }
}
</style>