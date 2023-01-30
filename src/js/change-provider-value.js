import { providersValueRefs } from "./refs";
import { calcTotalPrice, totalPrice } from "./calc-total-price";

export default function changeProviderValue() {
	const coefficient = 10;

	calcTotalPrice();

	// backblaze
	providersValueRefs.backblaze.style.width = `${totalPrice.backblaze * coefficient}px`;

	// bunny
	providersValueRefs.bunny.style.width = `${totalPrice.bunny * coefficient}px`;

	// scaleway
	providersValueRefs.scaleway.style.width = `${totalPrice.scaleway * coefficient}px`;

	// vultr
	providersValueRefs.vultr.style.width = `${totalPrice.vultr * coefficient}px`;
}
