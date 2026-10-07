const form = document.querySelector("#quoteForm");
const message = document.querySelector("#formMessage");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    message.textContent = "Sending your request...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      message.innerHTML =
        "Thanks for contacting <strong>ZOTAANG!</strong><br>" +
        "We've received your repair enquiry and will contact you shortly.<br>" +
        "📞 <a href=\"tel:02080874744\">020 8087 4744</a> &nbsp; " +
        "📍 <a href=\"https://maps.app.goo.gl/icvLijooE6EjZUCb9\" target=\"_blank\" rel=\"noopener\">Visit ZOTAANG</a>";

      form.reset();

    } catch (error) {
      message.textContent =
        "Sorry, something went wrong. Please call 020 8087 4744 or WhatsApp us.";
    }
  });
}
