import backblazeIcon from "../asset/images/backblaze_icon.png";
import bunnyIcon from "../asset/images/bunny_icon.png";
import scalewayIcon from "../asset/images/scaleway_icon.png";
import vultrIcon from "../asset/images/vultr_icon.png";

export const providers = [
	{
		name: "backblaze",
		icon: backblazeIcon,
		alt: "backblaze.com",
		valueId: "backblaze-value",
		priceId: "backblaze-price",
	},
	{
		name: "bunny",
		icon: bunnyIcon,
		alt: "bunny.net",
		valueId: "bunny-value",
		priceId: "bunny-price",
	},
	{
		name: "scaleway",
		icon: scalewayIcon,
		alt: "scaleway.com",
		valueId: "scaleway-value",
		priceId: "scaleway-price",
	},
	{
		name: "vultr",
		icon: vultrIcon,
		alt: "vultr.com",
		valueId: "vultr-value",
		priceId: "vultr-price",
	},
];
