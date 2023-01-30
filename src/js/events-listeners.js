import { configRefs, resultRefs } from "./refs";
import { calcTotalPrice } from "./calc-total-price";

import changeProviderValue from "./change-provider-value";
import changeProviderPrice from "./change-provider-price";

export default function eventsListeners() {
	configRefs.storageRange.addEventListener("input", () => {
		configRefs.storageValue.textContent = `${configRefs.storageRange.value} GB`;

		changeProviderValue();
		changeProviderPrice();
	});
	configRefs.transferRange.addEventListener("input", () => {
		configRefs.transferValue.textContent = `${configRefs.transferRange.value} GB`;

		changeProviderValue();
		changeProviderPrice();
	});

	resultRefs.resultBlock.addEventListener("click", () => {
		calcTotalPrice();
		changeProviderValue();
		changeProviderPrice();
	});
}
