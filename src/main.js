import Vue from 'vue'
import App from './App.vue'
//import Ninjas from './Ninja.vue'

//Vue.component('ninjas',Ninjas);

//event bus
export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
