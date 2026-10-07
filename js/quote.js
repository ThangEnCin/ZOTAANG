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

      message.textContent =
        "Thanks! Your quote request has been received. We will contact you shortly.";

      form.reset();

    } catch (error) {
      message.textContent =
        "Sorry, something went wrong. Please call 020 8087 4744 or WhatsApp us.";
    }
  });
}
