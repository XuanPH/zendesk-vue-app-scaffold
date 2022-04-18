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
      var requester = ticket.value.requester;
      // get identities in requester get type is phone_number
      var identities = requester.identities.filter(
        (identity) => identity.type === "phone_number"
      );
        
      return ticket.value.requester;
    }
  });
  //#region watcher
  watch(requester, (newVal, oldVal) => {
    console.log("requester", newVal, oldVal);
  });
  //#endregion

  getTicket();

  return { client, ticket, loading, requester };
}
