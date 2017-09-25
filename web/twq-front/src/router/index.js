import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/Login'
import Home from '@/components/Home'
import CriarForm from '@/components/CriarForm'
import ListarForms from '@/components/ListarForms'
import Responder from '@/components/Responder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login/',
      name: 'Login',
      component: Login
    },
    {
    	path: '/criarForm',
    	name: 'CriarForm',
    	component: CriarForm
    },
    {
    	path: '/listarForms',
    	name: 'ListarForms',
    	component: ListarForms
    },
    {
      path: '/Responder',
      name: 'Responder',
      component: Responder
    }
  ]
})
