import Vue from 'vue'
import App from './App.vue'

import { applyPolyfills, defineCustomElements } from '@paulbarre/wc-furigana/loader'

applyPolyfills().then(() => {
  defineCustomElements(window)
})

Vue.config.productionTip = false
Vue.config.ignoredElements = [/wc-furigana/]

new Vue({
  render: h => h(App),
}).$mount('#app')
