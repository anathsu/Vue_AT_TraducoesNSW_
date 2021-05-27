<template>
    <b-card-footer footer-bg-variant="dark" class="footer navbar-fixed-bottom">
        Copyright 2020~2021, Willian Nascimento® 
        <a href="https://www.linkedin.com/in/willian-n-silva/" title="Perfil do Linkedin" target="_blank" class="icone fab fa-linkedin"> </a>
        <a href="https://github.com/anathsu" title="Perfil do Github" target="_blank" class="icone fab fa-github-square"> </a>
        <a href="https://twitter.com/anathsu_" title="Perfil do Twitter" target="_blank" class="icone fab fa-twitter-square"> </a>
        <a href="https://www.facebook.com/anathsu" title="Perfil do Facebook" target="_blank" class="icone fab fa-facebook-square"> </a>
        <a href="https://www.instagram.com/willian.anathsu/" title="Perfil do instagram" target="_blank" class="icone fab fa-instagram-square"> </a>
        <a href="https://www.twitch.tv/anathsu" title="Perfil na Twitch" target="_blank" class="icone fab fa-twitch"> </a>
        <a href="#" title="Voltar ao topo" class="icone fas fa-angle-up"></a>

    </b-card-footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>

.footer{
  text-align: center;
  bottom: 0;
  left: 0;
  /* position: fixed; */
  width: 100%;
  height: 50px;
  margin-top: 10px;
  border-radius: 0%;
  color: white;
}

.icone{
  font-size: 20px;
  color: aliceblue;
  margin-left: 5px;
}

.icone:hover{
  transition: 0.2s;
  color:  #5bc0de;
  text-decoration: none;
}

</style>