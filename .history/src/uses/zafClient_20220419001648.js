import { ref, reactive, computed } from "vue";
export default function () {
  let client = reactive(null);
  const isLoading = ref(true);
  const ticket = ref(null);
  client = ZAFClient.init();
  client.invoke("resize", { width: "100%", height: "300px" });

  const getTicket = async () => {
    var ticketResponse = (await client.get("ticket")).ticket;
    ticket.value = ticketResponse;
  };
  
  const requester = computed(() => {});

  getTicket();



  return { client, ticket, isLoading };
}
