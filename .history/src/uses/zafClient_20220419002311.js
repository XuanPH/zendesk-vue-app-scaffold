import { ref, reactive, computed } from "vue";
export default function () {
  let client = reactive(null);
  const loading = ref(true);
  const ticket = ref(null);
  client = ZAFClient.init();
  client.invoke("resize", { width: "100%", height: "300px" });

  const getTicket = async () => {
    var ticketResponse = (await client.get("ticket")).ticket;
    ticket.value = ticketResponse;
    console.log(ticket.value);
    loading.value = false;
  };

  const requester = computed(() => {
    if (ticket.value != null && ticket.requester != null) {
      return ticket.value.requester;
    }
  });

  getTicket();

  return { client, ticket, loading, requester };
}
