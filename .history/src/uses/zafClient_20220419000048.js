import { ref, reactive } from "vue";
export default function () {
  const client = ref(null);
  client.value = ZAFClient.init();
  


  return {client};
}
