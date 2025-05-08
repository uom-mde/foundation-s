function applyObserver(element) {
	$(element).each(function() {
		const closure = $(this);

		const observer = new IntersectionObserver(
				(entries, _o) => {
					entries.forEach((entry) => {
						if (entry.intersectionRatio > 0) {
							$(closure).trigger('observer:visible');
						} else {
							$(closure).trigger('observer:hidden');
						}
					})
				},
				{
						root: null
				}
		);
		observer.observe($(closure).get(0));
	});
}

$(document).ready(function() {
	{		// scope
		const featured = $('#featured').find('.thrower');
		$(featured).empty();

		//Check this in your browser DevTools > Console
		console.log("NEW contents:", NEW);

		$("body").prepend(`<p style="color:red">Loaded ${NEW.length} featured sites.</p>`);

		for (const item of NEW) {
			const li = $(`
				<li>
					<a class="inner" href="${item.url}">
						<section class="inner2">
							${item.thumbnail ? `<img src="${item.thumbnail}" alt="${item.title}">` : ''}
							<div>
								<h4>${item.title}</h4>
								<p>${item.summary ? item.summary : 'No description available.'}</p>
							</div>
						</section>
					</a>
				</li>
			`);
		
			$(featured).append(li.clone());
		}
	}

	$('.scrollbox-thrower').each(function() {
		const thrower = $(this).find('ul.thrower');
		const throwright = $(this).find('button.throwright');
		const throwleft = $(this).find('button.throwleft');

		const maxItems = $(thrower).find('li').length;
		let outdent = 0;

		const shunt = (amount) => {
			outdent += amount;
			while ((outdent + 4) > maxItems) outdent--;
			if (outdent < 0) outdent = 0;
	
			$(thrower).css('left', `calc((-25% * ${outdent}) - (10px + (5px * ${outdent})))`);
	
			$(throwright).prop('disabled', (outdent + 4) >= maxItems);
			$(throwleft).prop('disabled', outdent === 0);
		};

		$(throwright).click(function() {
			shunt(4);
		});
		$(throwleft).click(function() {
			shunt(-4);
		});

		shunt(0);

		let sx = undefined;
		$(thrower).on('touchstart', function(e) {
			if (!e.originalEvent || !e.originalEvent.changedTouches || e.originalEvent.changedTouches.length < 1) return;
			sx = e.originalEvent.changedTouches[0].screenX;
		});
		$(thrower).on('touchend', function(e) {
			if (sx === undefined) return;

			const ex = e.originalEvent.changedTouches[0].screenX;
			const delta = ex - sx;
			console.log(delta);

			if (delta > 100 && !$(throwleft).is(':disabled')) $(throwleft).click();
			if (delta < -100 && !$(throwright).is(':disabled')) $(throwright).click();

			sx = undefined;
		});

		$(thrower).addClass('observer-hidden');
		applyObserver($(thrower));
		$(thrower).on('observer:visible', function() {
			$(thrower).removeClass('observer-hidden');
			console.log('visible');
		});
		$(thrower).on('observer:hidden', function() {
			console.log('hidden');
		});

		// const observing = new IntersectionObserver(
		// 		(entries, observer) => {
		// 			entries.forEach((entry) => {
		// 				console.log(thrower, entry.intersectionRatio > 0);
		// 			})
		// 		},
		// 		{
		// 				root: null
		// 		}
		// );
		// observing.observe($(thrower).get(0));
		// console.log(observing, $(thrower)[0]);
	});
});