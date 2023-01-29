import { refs } from "./refs";

export default function eventsListeners() {
	refs.storageRange.addEventListener("input", () => (refs.storageValue.textContent = `${refs.storageRange.value} GB`));
	refs.transferRange.addEventListener("input", () => (refs.transferValue.textContent = `${refs.transferRange.value} GB`));
}
