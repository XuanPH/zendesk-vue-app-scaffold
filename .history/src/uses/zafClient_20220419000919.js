import { ref, reactive } from "vue";
export default function () {
  let client = reactive(null);
  const isLoading = ref(true);
  const ticket = ref(null);
  client = ZAFClient.init();
  _zafClient.invoke("resize", { width: "100%", height: "600px" });

  const getTicket = async () => {
    var ticketResponse = await client.get("ticket")["ticket"];
    ticket.value = ticketResponse;
  };
  getTicket();
  return { client, ticket, isLoading };
}
