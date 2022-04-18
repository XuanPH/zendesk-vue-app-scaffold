import { ref, reactive } from "vue";
export default function () {
  const client = reactive(null);
  client.value = ZAFClient.init();
  


  return {client};
}
