import { providers } from "../js/providers";

export default function Result() {
	let result = ``;

	providers.map(({ name, icon, alt, options }) => {
		result += `

			<div class="result__position">
				<div class="result__provider-section">
					<div class="result__provider-block">
						<snap class="result__provider">${name}</snap>

		`;

		if (options) {
			result += `<div class="result__options-block">`;

			options.map(option => {
				result += `
				
				<input  class="result__option-radio" type="radio" id="${name}-${option.name.toLocaleLowerCase()}" name="${name}" value="${option.name}" ${option.checked}>
				<label class="result__option-name" for="${name}-${option.name.toLocaleLowerCase()}">${option.name}</label>
				
				`;
			});

			result += `</div>`;
		}

		result += `
				
					</div>

					<img class="result__icon" src=${icon} alt=${alt} width="16" />
				</div>

				<div class="result__value" id="${name.toLocaleLowerCase()}-value"></div>
				<span class="result__price" id="${name.toLocaleLowerCase()}-price"></span>
			</div>
		
		`;
	});

	return result;
}
