import backblazeIcon from "../asset/images/backblaze_icon.png";
import bunnyIcon from "../asset/images/bunny_icon.png";
import scalewayIcon from "../asset/images/scaleway_icon.png";
import vultrIcon from "../asset/images/vultr_icon.png";

export const providers = [
	{
		name: "backblaze",
		alt: "backblaze.com",
		icon: backblazeIcon,
	},
	{
		name: "bunny",
		alt: "bunny.net",
		icon: bunnyIcon,
		options: [
			{
				name: "HDD",
				checked: "checked",
			},
			{
				name: "SSD",
				checked: "",
			},
		],
	},
	{
		name: "scaleway",
		alt: "scaleway.com",
		icon: scalewayIcon,
		options: [
			{
				name: "Multi",
				checked: "",
			},
			{
				name: "Single",
				checked: "checked",
			},
		],
	},
	{
		name: "vultr",
		alt: "vultr.com",
		icon: vultrIcon,
	},
];
