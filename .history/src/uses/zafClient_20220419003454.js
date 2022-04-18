import { ref, reactive, computed, watch } from "vue";
export default function () {
  let client = reactive(null);
  const loading = ref(true);
  const ticket = ref(null);
  client = ZAFClient.init();
  client.invoke("resize", { width: "100%", height: "300px" });

  const getTicket = async () => {
    var ticketResponse = (await client.get("ticket")).ticket;
    ticket.value = ticketResponse;
    loading.value = false;
  };

  const requester = computed(() => {
    if (ticket.value != null && ticket.value.requester != null) {
      return ticket.value.requester;
    }
  });
  //#region watcher
  watch(requester, (newVal, oldVal) => {
    console.log("requester", newVal.requester, oldVal);
  });
  //#endregion

  getTicket();

  return { client, ticket, loading, requester };
}
