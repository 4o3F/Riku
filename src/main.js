import Vue from 'vue'
//import App from './components/IndexPage'
import page from 'page'
import './assets/bulma.css'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import login from "@/components/user/login";
import register from "@/components/user/register";

dom.watch()
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  data: {
    ViewComponent: { render: h => h('div', 'loading...') }
  },
  render (h) { return h(this.ViewComponent) }
})

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
page.base('')
page('/user/:uid', userspace)
page('/login', login_page)
page('/register', register_page)
page('*', notfound)

function notfound() {
  console.log("notfound")
}
function userspace(ctx) {
  console.log("test")
  console.log(ctx.params.uid)
}

function  login_page() {
  app.ViewComponent = login
}

function register_page() {
  app.ViewComponent = register
}

page()
