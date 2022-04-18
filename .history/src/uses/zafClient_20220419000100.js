import { ref, reactive } from "vue";
export default function () {
  const client = reactive(null);
  client = ZAFClient.init();

  return {client};
}
