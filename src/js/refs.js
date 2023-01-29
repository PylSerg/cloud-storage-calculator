export let configRefs = { configBlock: document.querySelector(".config__block") };
export let resultRefs = { resultBlock: document.querySelector(".result__block") };

// Creates refs
export function createRefs() {
	configRefs = {
		configBlock: document.querySelector(".config__block"),
		storageValue: document.querySelector("#storage-value"),
		storageRange: document.querySelector("#storage-range"),
		transferValue: document.querySelector("#transfer-value"),
		transferRange: document.querySelector("#transfer-range"),
	};

	resultRefs = {
		resultBlock: document.querySelector(".result__block"),
	};
}
