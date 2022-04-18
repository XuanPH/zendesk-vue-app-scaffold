import { ref, reactive, computed } from "vue";
export default function () {
  let client = reactive(null);
  const loading = ref(true);
  const ticket = ref(null);
  client = ZAFClient.init();
  client.invoke("resize", { width: "100%", height: "300px" });

  const getTicket = async () => {
    await setTimeout(async () => {
      var ticketResponse = (await client.get("ticket")).ticket;
      ticket.value = ticketResponse;
      loading.value = false;
    }, 3000);
  };

  const requester = computed(() => {
    if (ticket != null && ticket.requester != null) {
      return ticket.requester;
    }
  });

  getTicket();

  return { client, ticket, loading };
}