const detailButton = document.querySelector(".sound-button");
const saveButton = document.querySelector(".primary-action");
const statusMessage = document.querySelector(".saved-message");

let messageTimer;

function showStatus(text) {
  window.clearTimeout(messageTimer);
  statusMessage.textContent = text;
  statusMessage.classList.add("is-visible");

  messageTimer = window.setTimeout(() => {
    statusMessage.classList.remove("is-visible");
  }, 2800);
}

detailButton.addEventListener("click", () => {
  document.body.classList.toggle("details-on");
  const isActive = document.body.classList.contains("details-on");
  showStatus(isActive ? "Los detalles estan encendidos." : "Los detalles vuelven a estar suaves.");
});

saveButton.addEventListener("click", async () => {
  const text =
    "Mi chiquita, eres muy importante para mi. Te quiero mucho y queria dejarte este mensajito bonito.";

  try {
    await navigator.clipboard.writeText(text);
    showStatus("Mensaje guardado en el portapapeles.");
  } catch {
    showStatus("Este momento queda guardado aqui, contigo.");
  }
});
