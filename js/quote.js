const form = document.querySelector("#quoteForm");
const message = document.querySelector("#formMessage");

const deviceSelect = document.querySelector("#device");
const brandGroup = document.querySelector("#brandGroup");
const brandInput = document.querySelector("#brand");
const modelInput = document.querySelector("#model");


// ===============================
// Show Brand field when "Other"
// is selected
// ===============================

if (deviceSelect && brandGroup && brandInput) {

  deviceSelect.addEventListener("change", () => {

    if (deviceSelect.value === "Other") {

      // Show Brand field
      brandGroup.style.display = "";

      // Make Brand required
      brandInput.required = true;

      // Change model placeholder
      modelInput.placeholder = "e.g. P30 Pro";

    } else {

      // Hide Brand field
      brandGroup.style.display = "none";

      // Brand is no longer required
      brandInput.required = false;

      // Clear previous brand
      brandInput.value = "";

      // Normal model placeholder
      modelInput.placeholder = "e.g. iPhone 13";
    }

  });

}


// ===============================
// Quote form submission
// ===============================

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

      // Hide Brand field again after submission
      if (brandGroup && brandInput) {
        brandGroup.style.display = "none";
        brandInput.required = false;
        brandInput.value = "";
      }

      // Reset model placeholder
      if (modelInput) {
        modelInput.placeholder = "e.g. iPhone 13";
      }

    } catch (error) {

      message.textContent =
        "Sorry, something went wrong. Please call 020 8087 4744 or WhatsApp us.";

    }

  });

}
