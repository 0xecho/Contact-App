import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Logout from '../views/Logout.vue'
import Contacts from '../views/Contacts.vue'
import AddContact from '../views/AddContact.vue'
import _404 from '../views/404.vue'
import Profile from '../views/Profile.vue'
import EditContact from '../views/EditContact.vue'
// import Filters from '../views/Filters.vue'
// import ListContacts from '@/components/ListContacts' // TODO: JUST FOR TESTING ORGANIZE THIS LATER 

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/contact/:id',
    name: 'Contact Details',
    component: Contacts
  },
  {
    path: '/add',
    name: 'AddContact',
    component: AddContact
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/contact/edit/:id',
    name: 'EditContact',
    component: EditContact
  },
  {
    path: '/*',
    name: '404',
    component: _404
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>  {
  const publicPages = ['/login', '/register', '/']
  const loggedin = localStorage.user
  if(!publicPages.includes(to.path) && !loggedin)
  {
    next('/login')
  }
  next()
})

export default router
