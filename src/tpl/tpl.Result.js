import { providers } from "../js/providers";

export default function Result() {
	let result = ``;

	providers.map(({ name, icon, alt }) => {
		result += `

		<li class="result__position">
			<div class="result__provider-block">
				<snap class="result__provider">${name}</snap>
				<img class="result__icon" src=${icon} alt=${alt} width="16" />
			</div>

			<div class="result__value" id="${name.toLocaleLowerCase()}-value"></div>
			<span class="result__price" id="${name.toLocaleLowerCase()}-price"></span>
		</li>
		
		`;
	});

	return result;
}
