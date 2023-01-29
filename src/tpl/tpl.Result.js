import { providers } from "../js/providers";

export default function Result() {
	let result = ``;

	providers.map(provider => {
		result += `

		<li class="result__position">
			<div class="result__provider-block">
				<snap class="result__provider">${provider.name}</snap>
				<img class="result__icon" src=${provider.icon} alt=${provider.alt} width="16" />
			</div>

			<div class="result__value" id=${provider.value}></div>
			<span class="result__price" id=${provider.price}></span>
		</li>
		
		`;
	});

	return result;
}
