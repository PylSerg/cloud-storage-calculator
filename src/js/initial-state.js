import { configRefs } from "./refs";

export default function setInitialState() {
	configRefs.storageValue.textContent = `${configRefs.storageRange.value} GB`;
	configRefs.transferValue.textContent = `${configRefs.transferRange.value} GB`;
}
