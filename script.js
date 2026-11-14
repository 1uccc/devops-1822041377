const year = document.querySelector("#current-year");
const pipelineLink = document.querySelector(".button-primary");
const toast = document.querySelector("#toast");
let toastTimeout;

year.textContent = new Date().getFullYear();

pipelineLink.addEventListener("click", () => {
  toast.textContent = "Pipeline gồm 3 bước: push code, check và deploy.";
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2800);
});
