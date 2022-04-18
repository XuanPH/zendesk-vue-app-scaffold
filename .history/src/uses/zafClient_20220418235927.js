import { ref } from "vue";
export default function () {
  const client = ref(null);
  client.value = ZAFClient.init();
  console.log(client);
  return {client};
}
