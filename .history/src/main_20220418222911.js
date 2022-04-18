import { createApp } from 'vue'
import App from './App.vue'

var app = createApp(App).mount('#app')
// check varialbe ZAFClient is exists
if (typeof ZAFClient !== 'undefined') {
    ZAFClient.on('app.registered', function(app) {
    })

console.log("ZAF client", ZAFClient)  // eslint-disable-line no-console