import { providersValueRefs } from "./refs";
import { calcTotalPrice, totalPrice } from "./calc-total-price";

export default function changeProviderValue() {
	const coefficient = 0.5;

	calcTotalPrice();

	// backblaze
	if (totalPrice.backblaze <= totalPrice.bunny && totalPrice.backblaze <= totalPrice.scaleway && totalPrice.backblaze <= totalPrice.vultr) {
		providersValueRefs.backblaze.style.backgroundColor = "#c92626";
	} else {
		providersValueRefs.backblaze.style.backgroundColor = "#aaa";
	}

	providersValueRefs.backblaze.style.width = `${totalPrice.backblaze * coefficient}%`;

	// bunny
	if (totalPrice.bunny !== 0) {
		providersValueRefs.bunny.style.width = `${totalPrice.bunny * coefficient}%`;
	} else {
		providersValueRefs.bunny.style.width = `3px`;
	}

	if (totalPrice.bunny <= totalPrice.backblaze && totalPrice.bunny <= totalPrice.scaleway && totalPrice.bunny <= totalPrice.vultr) {
		providersValueRefs.bunny.style.backgroundColor = "#ff440a";
	} else {
		providersValueRefs.bunny.style.backgroundColor = "#aaa";
	}

	// scaleway
	if (totalPrice.scaleway !== 0) {
		providersValueRefs.scaleway.style.width = `${totalPrice.scaleway * coefficient}%`;
	} else {
		providersValueRefs.scaleway.style.width = `3px`;
	}

	if (totalPrice.scaleway <= totalPrice.backblaze && totalPrice.scaleway <= totalPrice.bunny && totalPrice.scaleway <= totalPrice.vultr) {
		providersValueRefs.scaleway.style.backgroundColor = "#b314e4";
	} else {
		providersValueRefs.scaleway.style.backgroundColor = "#aaa";
	}

	// vultr
	if (totalPrice.vultr <= totalPrice.backblaze && totalPrice.vultr <= totalPrice.bunny && totalPrice.vultr <= totalPrice.scaleway) {
		providersValueRefs.vultr.style.backgroundColor = "#1149e2";
	} else {
		providersValueRefs.vultr.style.backgroundColor = "#aaa";
	}

	providersValueRefs.vultr.style.width = `${totalPrice.vultr * coefficient}%`;
}
