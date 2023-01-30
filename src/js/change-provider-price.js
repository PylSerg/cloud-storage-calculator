import { providersPriceRefs } from "./refs";
import { calcTotalPrice, totalPrice } from "./calc-total-price";

export default function changeProviderPrice() {
	calcTotalPrice();

	// backblaze
	providersPriceRefs.backblaze.textContent = `$${totalPrice.backblaze}`;

	// bunny
	providersPriceRefs.bunny.textContent = `$${totalPrice.bunny}`;

	// scaleway
	providersPriceRefs.scaleway.textContent = `$${totalPrice.scaleway}`;

	// vultr
	providersPriceRefs.vultr.textContent = `$${totalPrice.vultr}`;
}
