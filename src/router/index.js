import Vue from 'vue'
import VueRouter from 'vue-router'
import Portada from '../views/Portada.vue'
import Contacto from '../views/Contacto.vue'
import SobreMi from '../views/SobreMi.vue'
import Post from '../views/Post.vue'
import NotFound from '../views/NotFound.vue'
import Articulo from '../components/Articulo.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Portada',
    component: Portada
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/SobreMi',
    name: 'SobreMi',
    component: SobreMi
  },
  {
    path: '/Post/', 
    name: 'Post',
    component: Post,
    children: [
      {
        path: ':articulo',
        name: 'Articulo',
        component: Articulo,
      }
    ], 
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
