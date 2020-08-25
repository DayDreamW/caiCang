import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import './style/base.less'
//import VueCompositionApi from '@vue/composition-api'
import 'ress'

createApp(App).use(router).use(store).mount('#app')
