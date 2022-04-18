import { ref } from "vue";
export default function () {
  const client = ref(null);
  client = ZAFClient.init();
  console.log(client);
  return {client};
}
