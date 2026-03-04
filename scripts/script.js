(function () {
	const promo = document.getElementById('promo');
	if (!promo) return;

	let totalSeconds = 5 * 60; // 5 minutes

	const format = (s) => {
		const m = Math.floor(s / 60);
		const sec = s % 60;
		return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
	};

	const update = () => {
		promo.textContent = `Order in the next ${format(totalSeconds)} and get 10% off!`;
	};

	update();

	const timer = setInterval(() => {
		totalSeconds -= 1;
		if (totalSeconds <= 0) {
			promo.textContent = `00:00 — Offer expired`;
			clearInterval(timer);
			return;
		}
		update();
	}, 1000);
})();