// =====================================================
// ZOTAANG FORM HANDLER
// Supports:
// 1. Repair Quote Form
// 2. Refurbished Phone Enquiry Form
// =====================================================


// =====================================================
// REPAIR QUOTE FORM
// =====================================================

const repairForm = document.querySelector("#quoteForm");
const repairMessage = document.querySelector("#formMessage");

const deviceSelect = document.querySelector("#device");
const brandGroup = document.querySelector("#brandGroup");
const brandInput = document.querySelector("#brand");
const modelInput = document.querySelector("#model");


// -----------------------------------------------------
// Repair form: Show Brand field when "Other" is selected
// -----------------------------------------------------

if (deviceSelect && brandGroup && brandInput && modelInput) {

  deviceSelect.addEventListener("change", () => {

    if (deviceSelect.value === "Other") {

      // Show Brand field
      brandGroup.style.display = "block";

      // Brand becomes required
      brandInput.required = true;

      // Helpful model example
      modelInput.placeholder = "e.g. P30 Pro";

    } else {

      // Hide Brand field
      brandGroup.style.display = "none";

      // Brand no longer required
      brandInput.required = false;

      // Clear previous brand
      brandInput.value = "";

      // Restore normal model example
      modelInput.placeholder = "e.g. iPhone 13";

    }

  });

}


// -----------------------------------------------------
// Repair form submission
// -----------------------------------------------------

if (repairForm && repairMessage) {

  repairForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    repairMessage.textContent = "Sending your request...";

    try {

      const response = await fetch(repairForm.action, {
        method: "POST",
        body: new FormData(repairForm),
        headers: {
          Accept: "application/json"
        }
      });


      if (!response.ok) {
        throw new Error("Repair form submission failed");
      }


      repairMessage.innerHTML =
        "Thanks for contacting <strong>ZOTAANG!</strong><br>" +
        "We've received your repair enquiry and will contact you shortly.<br>" +
        "📞 <a href=\"tel:02080874744\">020 8087 4744</a> &nbsp; " +
        "📍 <a href=\"https://maps.app.goo.gl/icvLijooE6EjZUCb9\" target=\"_blank\" rel=\"noopener\">Visit ZOTAANG</a>";


      // Reset form
      repairForm.reset();


      // Hide Brand field
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

      repairMessage.textContent =
        "Sorry, something went wrong. Please call 020 8087 4744 or WhatsApp us.";

    }

  });

}


// =====================================================
// REFURBISHED PHONE ENQUIRY FORM
// =====================================================

const refurbishedForm =
  document.querySelector("#refurbishedForm");

const refurbishedMessage =
  document.querySelector("#refurbishedFormMessage");

const refurbishedBrand =
  document.querySelector("#refurbishedBrand");

const refurbishedBrandGroup =
  document.querySelector("#refurbishedBrandGroup");

const refurbishedOtherBrand =
  document.querySelector("#refurbishedOtherBrand");


// -----------------------------------------------------
// Refurbished form: Show Other Brand field
// -----------------------------------------------------

if (
  refurbishedBrand &&
  refurbishedBrandGroup &&
  refurbishedOtherBrand
) {

  refurbishedBrand.addEventListener("change", () => {

    if (refurbishedBrand.value === "Other") {

      // Show manual brand field
      refurbishedBrandGroup.style.display = "block";

      // Make it required
      refurbishedOtherBrand.required = true;

    } else {

      // Hide manual brand field
      refurbishedBrandGroup.style.display = "none";

      // No longer required
      refurbishedOtherBrand.required = false;

      // Clear previous value
      refurbishedOtherBrand.value = "";

    }

  });

}


// -----------------------------------------------------
// Refurbished form submission
// -----------------------------------------------------

if (refurbishedForm && refurbishedMessage) {

  refurbishedForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    refurbishedMessage.textContent =
      "Sending your enquiry...";


    try {

      const response = await fetch(
        refurbishedForm.action,
        {
          method: "POST",
          body: new FormData(refurbishedForm),
          headers: {
            Accept: "application/json"
          }
        }
      );


      if (!response.ok) {

        throw new Error(
          "Refurbished enquiry submission failed"
        );

      }


      // Success message

      refurbishedMessage.innerHTML =
        "Thanks for contacting <strong>ZOTAANG!</strong><br>" +
        "We've received your refurbished phone enquiry and will check our current stock.<br>" +
        "📞 <a href=\"tel:02080874744\">020 8087 4744</a> &nbsp; " +
        "📍 <a href=\"https://maps.app.goo.gl/icvLijooE6EjZUCb9\" target=\"_blank\" rel=\"noopener\">Visit ZOTAANG</a>";


      // Reset form

      refurbishedForm.reset();


      // Hide Other Brand field

      if (
        refurbishedBrandGroup &&
        refurbishedOtherBrand
      ) {

        refurbishedBrandGroup.style.display = "none";

        refurbishedOtherBrand.required = false;

        refurbishedOtherBrand.value = "";

      }


    } catch (error) {

      refurbishedMessage.textContent =
        "Sorry, something went wrong. Please call 020 8087 4744 or WhatsApp us.";

    }

  });

}
