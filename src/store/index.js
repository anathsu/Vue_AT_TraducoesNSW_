import Vue from 'vue'
import VueX from 'vuex'
import postagem from './modules/postagem'

Vue.use(VueX);

export default new VueX.Store({
    modules:{
        postagem
    }
});