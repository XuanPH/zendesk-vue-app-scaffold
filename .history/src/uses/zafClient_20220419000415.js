import { ref, reactive } from "vue";
export default function () {
  let client = reactive(null);
  const isLoading = ref(true);
  client = ZAFClient.init();
  const getUser = async () => {
  
}  

  return {client};
}
