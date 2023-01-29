import { config } from "../js/config";

export default function Config() {
	let configuration = ``;

	config.map(({ name, min, max, step, value }) => {
		configuration += `

        <div class="config__type">
			<div class="config__title">
				<p>${name}:</p>
				<p class="config__value" id="${name.toLocaleLowerCase()}-value"></p>
			</div>

			<input class="config__range" id="${name.toLocaleLowerCase()}-range" type="range" min=${min} max=${max} step=${step} value=${value} />
		</div>

        `;
	});

	return configuration;
}
