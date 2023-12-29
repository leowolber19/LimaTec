import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '../views/Home/HomeIndex.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: '',
        component: Home
    }
]


const roteador = createRouter({
    history: createWebHistory(),
    routes: rotas
})

export default roteador;