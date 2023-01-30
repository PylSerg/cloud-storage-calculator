export let configRefs = { configBlock: document.querySelector(".config__block") };
export let resultRefs = { resultBlock: document.querySelector(".result__block") };
export let providersValueRefs = {};
export let providersPriceRefs = {};

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
		bunnyHDD: document.querySelector("#bunny-hdd"),
		bunnySSD: document.querySelector("#bunny-ssd"),
		scalewayMulti: document.querySelector("#scaleway-multi"),
		scalewaySingle: document.querySelector("#scaleway-single"),
	};

	providersValueRefs = {
		backblaze: document.querySelector("#backblaze-value"),
		bunny: document.querySelector("#bunny-value"),
		scaleway: document.querySelector("#scaleway-value"),
		vultr: document.querySelector("#vultr-value"),
	};

	providersPriceRefs = {
		backblaze: document.querySelector("#backblaze-price"),
		bunny: document.querySelector("#bunny-price"),
		scaleway: document.querySelector("#scaleway-price"),
		vultr: document.querySelector("#vultr-price"),
	};
}
