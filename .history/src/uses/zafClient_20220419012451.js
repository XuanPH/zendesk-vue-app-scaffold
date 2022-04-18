import { ref, reactive, computed, toRefs } from "vue";
export default function () {
  let client = reactive(null);
  const ticketState = reactive({
      ticket: null,
      loading: true
  })

  client = ZAFClient.init();
  client.invoke("resize", { width: "100%", height: "300px" });

  const getTicket = async () => {
    var ticketResponse = (await client.get("ticket")).ticket;
    ticketState.ticket = ticketResponse;
    ticketState.loading = false;
  };

  const requester = computed(() => {
    if (ticketState.ticket != null && ticketState.ticket.requester != null) {
      var requester = ticketState.ticket.requester;
      // get identities in requester get type is phone_number
      var identities = requester.identities.filter(
        (identity) => identity.type === "phone_number"
      );
      if (identities.length > 0) {
        requester.phone = identities[0].value;
      }
      return ticketState.ticket.requester;
    }
  });

  getTicket();

  return { ...toRefs(ticketState), requester };
}
