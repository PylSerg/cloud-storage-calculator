export const prices = {
	backblaze: {
		minPayment: 7,
		storage: 0.005,
		transfer: 0.01,
	},
	bunny: {
		maxPayment: 10,
		storage: {
			HDD: 0.01,
			SSD: 0.02,
		},
		transfer: 0.01,
	},
	scaleway: {
		storage: {
			multi: {
				free: 75,
				rate: 0.06,
			},
			single: {
				free: 75,
				rate: 0.03,
			},
		},
		transfer: {
			free: 75,
			rate: 0.02,
		},
	},
	vultr: {
		minPayment: 5,
		storage: 0.01,
		transfer: 0.01,
	},
};
