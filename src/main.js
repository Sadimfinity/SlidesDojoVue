import Vue from 'vue'
import App from './App.vue'
import Eagle, { CodeBlock, CodeComment } from 'eagle.js'
import 'animate.css'


Vue.use(Eagle)

Eagle.use(CodeBlock)
Eagle.use(CodeComment)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')