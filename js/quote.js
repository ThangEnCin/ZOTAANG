const form = document.querySelector("#quoteForm");
const message = document.querySelector("#formMessage");

const deviceSelect = document.querySelector("#device");
const modelInput = document.querySelector("#model");
const modelLabel = document.querySelector("#modelLabel");


// ===============================
// Device / Model field
// ===============================

if (deviceSelect && modelInput && modelLabel) {

  deviceSelect.addEventListener("change", () => {

    switch (deviceSelect.value) {

      case "iPhone":
        modelLabel.textContent = "Model";
        modelInput.placeholder = "e.g. iPhone 13";
        break;

      case "Samsung":
        modelLabel.textContent = "Model";
        modelInput.placeholder = "e.g. Galaxy S23";
        break;

      case "Google Pixel":
        modelLabel.textContent = "Model";
        modelInput.placeholder = "e.g. Pixel 8";
        break;

      case "MacBook":
        modelLabel.textContent = "Model";
        modelInput.placeholder = "e.g. MacBook Air M2";
        break;

      case "Windows Laptop":
        modelLabel.textContent = "Brand & Model";
        modelInput.placeholder = "e.g. HP EliteBook 840 G8";
        break;

      case "Tablet":
        modelLabel.textContent = "Brand & Model";
        modelInput.placeholder = "e.g. iPad 10th Gen, Galaxy Tab S9";
        break;

      case "Other":
        modelLabel.textContent = "Brand & Model";
        modelInput.placeholder =
          "e.g. OnePlus 12, Huawei P30, Motorola G54";
        break;

      default:
        modelLabel.textContent = "Model";
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

      // Reset Model field after form submission
      if (modelLabel && modelInput) {
        modelLabel.textContent = "Model";
        modelInput.placeholder = "e.g. iPhone 13";
      }

    } catch (error) {

      message.textContent =
        "Sorry, something went wrong. Please call 020 8087 4744 or WhatsApp us.";

    }

  });

}
