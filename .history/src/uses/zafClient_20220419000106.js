import { ref, reactive } from "vue";
export default function () {
  var client = reactive(null);
  client = ZAFClient.init();

  return {client};
}
