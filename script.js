const scriptURL =
  "https://script.google.com/macros/s/AKfycby_ai0-WTlj7wcWPF1OP9fY1JS1ZerPadU2AiURGtpDVQcakORMI3l3Zo0UXuPAVYpf/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thankyou For Subscribing!";
      form.reset();
      setTimeout(() => {
        msg.innerHTML = "";
      }, 2000);
    })
    .catch((error) => console.error("Error!", error.message));
});
