import { refs } from "./refs";

export default function setInitialState() {
	refs.storageValue.textContent = `${refs.storageRange.value} GB`;
	refs.transferValue.textContent = `${refs.transferRange.value} GB`;
}
