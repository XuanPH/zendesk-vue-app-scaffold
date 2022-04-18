import { createApp } from 'vue'
import App from './App.vue'

var app = createApp(App).mount('#app')
// check variable ZAFClient is exists
if (typeof ZAFClient !== 'undefined') {
    //set ZAFClient is global variable of vue
    app.$ZAFClient = ZAFClient
}
