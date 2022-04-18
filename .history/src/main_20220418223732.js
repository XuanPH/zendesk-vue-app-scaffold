import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.mount('#app');
console.log(ZAFClient);
// check variable ZAFClient is exists
if (typeof ZAFClient !== 'undefined') {
    //set ZAFClient is global variable of vue
    var _zafClient = ZAFClient.init();
    _zafClient.invoke('resize', { width: '100%', height: '600px' }); 
    app.config.globalProperties._zafClient = _zafClient;
}