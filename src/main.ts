import { factory } from "./factory";

let count = factory(0, 1);

function update_count_and_reset_counter() {
  const start_at = parseInt((document.getElementById("start_at") as HTMLInputElement).value, 10);
  const step = parseInt((document.getElementById("step") as HTMLInputElement).value, 10);
  count = factory(start_at, step);
}

const start_at_control = document.getElementById("start_at") as HTMLInputElement;
const step_control = document.getElementById("step") as HTMLInputElement;

start_at_control?.addEventListener("change", update_count_and_reset_counter);
step_control?.addEventListener("change", update_count_and_reset_counter);

const count_button = document.querySelector(".count_button") as HTMLButtonElement;
const current_count = document.querySelector(".current_count") as HTMLSpanElement;

function update_count() {
  const new_count = count();
  current_count.textContent = new_count.toString();
}

count_button.addEventListener("click", update_count);
