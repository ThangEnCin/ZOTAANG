const form = document.querySelector("#quoteForm");
const message = document.querySelector("#formMessage");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(form).entries());
    message.textContent = "Sending your request...";

    try {
      const response = await fetch("http://localhost:3000/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message || "Request failed");

      message.textContent = "Thanks! Your quote request has been received.";
      form.reset();
    } catch (error) {
      message.textContent =
        "The online form is not connected yet. Please call 020 8087 4744 or WhatsApp us.";
    }
  });
}
