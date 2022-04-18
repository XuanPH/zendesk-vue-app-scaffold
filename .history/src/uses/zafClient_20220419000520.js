import { ref, reactive } from "vue";
export default function () {
  let client = reactive(null);
  const isLoading = ref(true);
  const ticket = ref(null)l
  client = ZAFClient.init();
  const getTicket = async () => {
    var ticket = await client.get("ticket")["ticket"];

  };

  return { client };
}
