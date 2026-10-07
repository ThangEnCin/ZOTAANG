const form = document.querySelector("#quoteForm");
const message = document.querySelector("#formMessage");

const deviceSelect = document.querySelector("#device");
const brandGroup = document.querySelector("#brandGroup");
const brandInput = document.querySelector("#brand");
const modelInput = document.querySelector("#model");


// ========================================
// DEVICE / BRAND FIELD
// ========================================

if (deviceSelect && brandGroup && brandInput && modelInput) {

  deviceSelect.addEventListener("change", () => {

    if (deviceSelect.value === "Other") {

      // Show Brand field
      brandGroup.style.display = "block";

      // Brand is required when Other is selected
      brandInput.required = true;

      // Helpful model example
      modelInput.placeholder = "e.g. P30 Pro";

    } else {

      // Hide Brand field
      brandGroup.style.display = "none";

      // Brand is no longer required
      brandInput.required = false;

      // Clear any previous brand
      brandInput.value = "";

      // Restore normal model example
      modelInput.placeholder = "e.g. iPhone 13";

    }

  });

}


// ========================================
// QUOTE FORM SUBMISSION
// ========================================

if (form) {

  form.addEventListener("submit", async (event) => {

    event.preventDefault();

    // Show sending message
    message.textContent = "Sending your request...";

    try {

      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });


      // Check if Formspree accepted the submission
      if (!response.ok) {
        throw new Error("Form submission failed");
      }


      // Success message
      message.innerHTML =
        "Thanks for contacting <strong>ZOTAANG!</strong><br>" +
        "We've received your repair enquiry and will contact you shortly.<br>" +
        "📞 <a href=\"tel:02080874744\">020 8087 4744</a> &nbsp; " +
        "📍 <a href=\"https://maps.app.goo.gl/icvLijooE6EjZUCb9\" target=\"_blank\" rel=\"noopener\">Visit ZOTAANG</a>";


      // Reset the form
      form.reset();


      // Hide Brand field after submission
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

      // Error message
      message.textContent =
        "Sorry, something went wrong. Please call 020 8087 4744 or WhatsApp us.";

    }

  });

}
