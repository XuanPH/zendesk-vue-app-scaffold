import { ref, reactive, computed, toRefs } from "vue";
export default function () {
  let client = reactive(null);
  const loading = ref(true);
  let ticket = reactive(null);

  client = ZAFClient.init();
  client.invoke("resize", { width: "100%", height: "300px" });

  const getTicket = async () => {
    var ticketResponse = (await client.get("ticket")).ticket;
    ticket = ticketResponse;
    loading.value = false;
  };

  const requester = computed(() => {
    if (ticket != null && ticket.requester != null) {
      var requester = ticket.requester;
      // get identities in requester get type is phone_number
      var identities = requester.identities.filter(
        (identity) => identity.type === "phone_number"
      );
      if (identities.length > 0) {
        requester.phone = identities[0].value;
      }
      return ticket.requester;
    }
  });

  getTicket();

  return { ...toRefs(client), ...toRefs(ticket), loading, requester };
}
