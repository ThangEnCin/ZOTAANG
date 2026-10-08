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


if (
  deviceSelect &&
  brandGroup &&
  brandInput &&
  modelInput
) {

  deviceSelect.addEventListener("change", () => {

    if (deviceSelect.value === "Other") {

      brandGroup.style.display = "block";

      brandInput.required = true;

      modelInput.placeholder =
        "e.g. P30 Pro";

    } else {

      brandGroup.style.display = "none";

      brandInput.required = false;

      brandInput.value = "";

      modelInput.placeholder =
        "e.g. iPhone 13 or Galaxy S23";

    }

  });

}


// =====================================================
// SUBMIT REPAIR QUOTE FORM
// =====================================================

if (
  repairForm &&
  repairMessage
) {

  repairForm.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();

      repairMessage.textContent =
        "Sending your request...";


      try {

        const response = await fetch(
          repairForm.action,
          {
            method: "POST",

            body: new FormData(
              repairForm
            ),

            headers: {
              Accept:
                "application/json"
            }
          }
        );


        if (!response.ok) {

          throw new Error(
            "Repair form submission failed"
          );

        }


        repairMessage.innerHTML =
          "Thanks for contacting <strong>ZOTAANG!</strong><br>" +
          "We've received your repair enquiry and will contact you shortly.<br>" +
          "📞 <a href=\"tel:02080874744\">020 8087 4744</a> &nbsp; " +
          "📍 <a href=\"https://maps.app.goo.gl/icvLijooE6EjZUCb9\" target=\"_blank\" rel=\"noopener\">Visit ZOTAANG</a>";


        repairForm.reset();


        if (
          brandGroup &&
          brandInput
        ) {

          brandGroup.style.display =
            "none";

          brandInput.required =
            false;

          brandInput.value = "";

        }


        if (modelInput) {

          modelInput.placeholder =
            "e.g. iPhone 13 or Galaxy S23";

        }

      }


      catch (error) {

        repairMessage.textContent =
          "Sorry, something went wrong. Please call 020 8087 4744 or WhatsApp us.";

      }

    }
  );

}


// =====================================================
// REFURBISHED PHONE ENQUIRY FORM
// =====================================================

const refurbishedForm =
  document.querySelector(
    "#refurbishedForm"
  );

const refurbishedMessage =
  document.querySelector(
    "#refurbishedFormMessage"
  );

const refurbishedBrand =
  document.querySelector(
    "#refurbishedBrand"
  );

const refurbishedBrandGroup =
  document.querySelector(
    "#refurbishedBrandGroup"
  );

const refurbishedOtherBrand =
  document.querySelector(
    "#refurbishedOtherBrand"
  );


if (
  refurbishedBrand &&
  refurbishedBrandGroup &&
  refurbishedOtherBrand
) {

  refurbishedBrand.addEventListener(
    "change",
    () => {

      if (
        refurbishedBrand.value ===
        "Other"
      ) {

        refurbishedBrandGroup.style.display =
          "block";

        refurbishedOtherBrand.required =
          true;

      } else {

        refurbishedBrandGroup.style.display =
          "none";

        refurbishedOtherBrand.required =
          false;

        refurbishedOtherBrand.value =
          "";

      }

    }
  );

}


// =====================================================
// SUBMIT REFURBISHED ENQUIRY FORM
// =====================================================

if (
  refurbishedForm &&
  refurbishedMessage
) {

  refurbishedForm.addEventListener(
    "submit",
    async (event) => {

      event.preventDefault();

      refurbishedMessage.textContent =
        "Sending your enquiry...";


      try {

        const response =
          await fetch(
            refurbishedForm.action,
            {
              method: "POST",

              body: new FormData(
                refurbishedForm
              ),

              headers: {
                Accept:
                  "application/json"
              }
            }
          );


        if (!response.ok) {

          throw new Error(
            "Refurbished enquiry submission failed"
          );

        }


        refurbishedMessage.innerHTML =
          "Thanks for contacting <strong>ZOTAANG!</strong><br>" +
          "We've received your refurbished phone enquiry and will check our current stock.<br>" +
          "📞 <a href=\"tel:02080874744\">020 8087 4744</a> &nbsp; " +
          "📍 <a href=\"https://maps.app.goo.gl/icvLijooE6EjZUCb9\" target=\"_blank\" rel=\"noopener\">Visit ZOTAANG</a>";


        refurbishedForm.reset();


        if (
          refurbishedBrandGroup &&
          refurbishedOtherBrand
        ) {

          refurbishedBrandGroup.style.display =
            "none";

          refurbishedOtherBrand.required =
            false;

          refurbishedOtherBrand.value =
            "";

        }

      }


      catch (error) {

        refurbishedMessage.textContent =
          "Sorry, something went wrong. Please call 020 8087 4744 or WhatsApp us.";

      }

    }
  );

}
