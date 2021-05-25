// import axios from "axios";
import api from './api'

const options = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    // 'Connection': 'keep-alive',
    // 'Content-Length' : '254',
    'Content-Type':  'application/json; charset=utf-8'
  }
};

const state = {
  postagens: [],
  // logado: null
};

//Acesso ao state
const getters = {
  allPostagens: state => state.postagens,
  // userLogado: state => state.logado
};

const actions = {
  //Disparando para a API a requisição GET
  getPostagens({ commit }) {
    api.get("postagem")
      .then((response) => commit('getPostagens', response.data))
      .catch((err) => {
        console.error("Ops! Ocorreu um erro: " + err);
     });
    // axios.get(
    //   // "http://my-json-server.typicode.com/anathsu/vue-json-api/dados"
    //   "https://rest-api-nswt.herokuapp.com/postagem/"
    // ).then((response) => {
    //   //Envio para getPostagens da mutations a resposta da API
    //   commit('getPostagens', response.data);
    // });
  },

  addPostagem({ commit }, postagem) {
    
    let params = {
      title: postagem.title,
      img: postagem.img,
      equipe: postagem.equipe,
      creditos: postagem.creditos,
      download: postagem.download
    }

    api.post('/postagem', params, options)
      .then((response) => {
        console.log(response.status)
        commit('addPostagem', postagem)
      })
      .catch((err) => {
        alert("Ops! Ocorreu um erro: " + err);
     });
    // console.log(res.data);
    
    // const response = await api.post("addPostagem", postagem);
  },

  deletePostagem({ commit }, id) {
    if(confirm('Tem certeza que quer excluir?')){
      api.delete(`postagem/${id}`).then(res => res.data);
      commit('deletePostagem', id)
    }
  },

  updatePostagem({ commit }, updPostagem) {
    alert("Postagem editada com sucesso!")
    api.patch(`postagem/${updPostagem._id}`, {
      title: updPostagem.title,
      img: updPostagem.img,
      equipe: updPostagem.equipe,
      creditos: updPostagem.creditos,
      download: updPostagem.download,
      data: updPostagem.data
    }, options);
    commit("updatePostagem", updPostagem);
  },

  // verificaLogado({ commit }){
  //   this.$firebase.auth().onAuthStateChanged( user => {
  //     let usuario = user ? user.uid : null
  //     commit("verificaLogado", usuario)
  //   })
    
  // },

}

//Insiro no state as respostas da API
const mutations = {
  //Pego a resposta da api e passo para o state
  getPostagens: (state, data) => (state.postagens = data),

  //Adicionando um usuário
  addPostagem: (state, data) => state.postagens.push(data),

  //deletando um usuário
  deletePostagem: (state, id) => (state.postagens = state.postagens.filter(p => p._id !== id)),

  updatePostagem: (state, data) => {
    const index = state.postagens.findIndex(t => t.id === data._id)
    if (index !== -1) {
      state.todos.splice(index, 1, data);
    }
  },

  // verificaLogado: (state, usuario) => (state.logado = usuario),
}

export default {
  state,
  actions,
  getters,
  mutations
};