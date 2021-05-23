import Vue from 'vue';
import VueRouter from 'vue-router';
import ListaDePostagens from './components/ListaDePostagens'
import DetalharPostagem from './components/DetalharPostagem'
import Contato from './components/Contato'
import Doacao from './components/Doacao'
import Login from './components/Login'


Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: ListaDePostagens
        },
        {
            path: '/postagem/:id',
            name: 'postagemDetail',
            component: DetalharPostagem
        },
        {
            path: '/contato',
            name: 'contato',
            component: Contato
        },
        {
            path: '/doacao',
            name: 'doacao',
            component: Doacao
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
    ]
});