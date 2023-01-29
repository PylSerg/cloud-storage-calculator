import { configRefs } from "./refs";

export default function eventsListeners() {
	configRefs.storageRange.addEventListener("input", () => (configRefs.storageValue.textContent = `${configRefs.storageRange.value} GB`));
	configRefs.transferRange.addEventListener("input", () => (configRefs.transferValue.textContent = `${configRefs.transferRange.value} GB`));
}
