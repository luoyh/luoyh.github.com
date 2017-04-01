(function(doc, win) {
	var randColor = function() {
		return '#' + ((~~(Math.random() * 0xffffff)) | 0x800000).toString(16);
	};
	var 
		c = doc.getElementById('c'), 
		ctx = c.getContext('2d'),
		w = c.width,
		h = c.height,
		r = w / 2,
		arcWidth = 5,
		t1 = 0,
		t2 = 0,
		t3 = 0,
		did = 0,
		num = 0
		c1 = randColor(),
		c2 = randColor(),
		c3 = randColor();
		;
	var draw = function() {
		num ++;
		if (t1 >= 20) t1 = 0;
		if (t2 >= 20) t2 = 0;
		if (t3 >= 20) t3 = 0;
		if (num % 3 == 0) t1 ++;
		if (num % 2 == 0) t2 ++;
		t3 ++;
		ctx.clearRect(0, 0, w, h);
		ctx.save();
		ctx.translate(r, r);

		ctx.beginPath();
		ctx.strokeStyle = c1;
		ctx.lineWidth = arcWidth;
		ctx.arc(0, 0, r - 5, t1 / 10 * Math.PI, (0.6 + t1 / 10) * Math.PI);
		ctx.stroke();

		ctx.beginPath();
		ctx.strokeStyle = c2;
		ctx.lineWidth = arcWidth;
		ctx.arc(0, 0, r - 20, - t2 / 10 * Math.PI, (0.5 - t2 / 10) * Math.PI);
		ctx.stroke();

		ctx.beginPath();
		ctx.strokeStyle = c3;
		ctx.lineWidth = arcWidth;
		ctx.arc(0, 0, r - 40, t3 / 10 * Math.PI, (0.4 + t3 / 10) * Math.PI);
		ctx.stroke();

		ctx.restore();
	};

	did = setInterval(draw, 30);

	setTimeout(function() {
		clearInterval(did);
		$('#c').hide();
		$('.man').show();
		var r = 0, l = 0, rid = 0, lid = 0;
		rid = setInterval(function() {
			$('.left').css('right', (50 + r ++ / 10) + '%');
			if (r >= 500) {
				clearInterval(rid);
				$('.load').hide();
			}
		}, 2);
		lid = setInterval(function() {
			$('.right').css('left', (50 + l ++ / 10) + '%');
			if (r >= 500) {
				clearInterval(lid);
			}
		}, 2);
	}, 3000);

	win.cancel = function() {
		clearInterval(did);
	};


})(document, window);