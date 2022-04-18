import { ref } from "vue"
export default function() {
    const client = ref({});
    client = ZAFClient.init();
    console.log(client);

}