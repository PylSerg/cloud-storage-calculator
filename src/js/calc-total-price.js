import { prices } from "./prices";
import { configRefs, resultRefs } from "./refs";

export let totalPrice = {
	backblaze: 0,
	bunny: 0,
	scaleway: 0,
	vultr: 0,
};

export function calcTotalPrice() {
	// backblaze
	const backblazeStorage = configRefs.storageRange.value * prices.backblaze.storage;
	const backblazeTransfer = configRefs.transferRange.value * prices.backblaze.transfer;

	let backblazeTotalPrice = backblazeStorage + backblazeTransfer;

	if (backblazeTotalPrice < prices.backblaze.minPayment) backblazeTotalPrice = prices.backblaze.minPayment;

	totalPrice = { ...totalPrice, backblaze: backblazeTotalPrice.toFixed(2) };

	// bunny
	let bunnyPriceStorage = 0;

	if (resultRefs.bunnyHDD.checked) bunnyPriceStorage = prices.bunny.storage.HDD;
	if (resultRefs.bunnySSD.checked) bunnyPriceStorage = prices.bunny.storage.SSD;

	const bunnyStorage = configRefs.storageRange.value * bunnyPriceStorage;
	const bunnyTransfer = configRefs.transferRange.value * prices.bunny.transfer;

	let bunnyTotalPrice = bunnyStorage + bunnyTransfer;

	if (bunnyTotalPrice > prices.bunny.maxPayment) bunnyTotalPrice = prices.bunny.maxPayment;

	totalPrice = { ...totalPrice, bunny: bunnyTotalPrice.toFixed(2) };

	// scaleway
	let scalewayPriceStorage = 0;

	if (resultRefs.scalewayMulti.checked) {
		if (configRefs.storageRange.value < prices.scaleway.storage.multi.free) {
			scalewayPriceStorage = 0;
		} else {
			scalewayPriceStorage = prices.scaleway.storage.multi.rate;
		}
	}

	if (resultRefs.scalewaySingle.checked) {
		if (configRefs.storageRange.value < prices.scaleway.storage.single.free) {
			scalewayPriceStorage = 0;
		} else {
			scalewayPriceStorage = prices.scaleway.storage.single.rate;
		}
	}

	let scalewayPriceTransfer = 0;

	if (configRefs.transferRange.value < prices.scaleway.transfer.free) {
		scalewayPriceTransfer = 0;
	} else {
		scalewayPriceTransfer = prices.scaleway.transfer.rate;
	}

	const scalewayStorage = (configRefs.storageRange.value - prices.scaleway.storage.single.free) * scalewayPriceStorage;
	const scalewayTransfer = (configRefs.transferRange.value - prices.scaleway.transfer.free) * scalewayPriceTransfer;

	const scalewayTotalPrice = scalewayStorage + scalewayTransfer;

	totalPrice = { ...totalPrice, scaleway: scalewayTotalPrice.toFixed(2) };

	// vultr
	const vultrStorage = configRefs.storageRange.value * prices.vultr.storage;
	const vultrTransfer = configRefs.transferRange.value * prices.vultr.transfer;

	let vultrTotalPrice = vultrStorage + vultrTransfer;

	if (vultrTotalPrice < prices.vultr.minPayment) vultrTotalPrice = prices.vultr.minPayment;

	totalPrice = { ...totalPrice, vultr: vultrTotalPrice.toFixed(2) };
}
