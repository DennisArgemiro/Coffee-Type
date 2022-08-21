import { reset } from "./setText.js";
import { stop } from "./timer.js";

document.querySelector("#repeat").addEventListener("click", () => {
  stop();
  reset();
});
