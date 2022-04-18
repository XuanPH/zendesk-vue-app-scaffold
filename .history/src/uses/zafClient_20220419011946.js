import { ref, reactive, computed, toRef } from "vue";
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
    ticket.value = ticketResponse;
    loading.value = false;
  };

  const requester = computed(() => {
    if (ticketState.ticket != null && ticketState.ticket.requester != null) {
      var requester = ticket.value.requester;
      // get identities in requester get type is phone_number
      var identities = requester.identities.filter(
        (identity) => identity.type === "phone_number"
      );
      if (identities.length > 0) {
        requester.phone = identities[0].value;
      }
      return ticket.value.requester;
    }
  });

  getTicket();

  return {  ...toRef(client), ...toRef(ticketState), requester };
}
