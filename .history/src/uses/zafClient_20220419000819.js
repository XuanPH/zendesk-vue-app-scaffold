import { ref, reactive } from "vue";
export default function () {
  let client = reactive(null);
  const isLoading = ref(true);
  const ticket = ref(null);
  client = ZAFClient.init();
  const getTicket = async () => {
    var ticketResponse = await client.get("ticket")["ticket"];
    ticket.value = ticketResponse;
  };

  return { client, ticket };
}
