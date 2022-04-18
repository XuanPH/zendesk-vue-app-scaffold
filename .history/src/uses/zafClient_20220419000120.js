import { ref, reactive } from "vue";
export default function () {
  let client = reactive(null);
  client = ZAFClient.init();
    
  return {client};
}
