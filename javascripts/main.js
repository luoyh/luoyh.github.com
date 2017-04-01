(function(doc, win) {
	var 
		c = doc.getElementById('canvas'), 
		ctx = c.getContext('2d'),
		w = c.width,
		h = c.height,
		r = w / 2,
		arcWidth = 10
		;

	var drawArc = function() {
		ctx.beginPath();
		ctx.strokeStyle = randColor();

		ctx.translate(r, r);

		ctx.lineWidth = arcWidth;

		ctx.arc(0, 0, r - arcWidth / 2, 0, 2 * Math.PI);

		ctx.stroke();

		var hours = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12 , 1, 2];
		hours.forEach(function(e, i){
			var rad = 30 * 2 * Math.PI / 360 * i; //Math.PI*2/12*i;
			var x = Math.cos(rad) * (r - 35), 
		 		y = 7 + Math.sin(rad) * (r - 35);

		 	ctx.font = '22px YaHei';	
		 	ctx.textAlign = 'center';
		 	ctx.textBaseLine = 'middle';
		 	ctx.fillStyle = '#555';
		 	ctx.fillText(e, x, y);
		});


		for(var i = 0; i < 60; i ++) {
			var rad = 6 * 2 * Math.PI / 360 * i; //Math.PI*2/12*i;
			var x = Math.cos(rad) * (r - 15), 
		 		y = Math.sin(rad) * (r - 15);
		 	ctx.beginPath();
			ctx.arc(x, y, 3, 0, 2 * Math.PI);
		 	if(i % 5 === 0) {
		 		ctx.fillStyle =  '#000'; //randColor();
		 	} else {
		 		ctx.fillStyle = randColor();
		 	}
		 	ctx.fill();
		}
	};

	var drawHour = function(hour, minute) {
		ctx.save();
		var rad = 30 * 2 * Math.PI / 360 * hour + 30 * Math.PI * 2 / 360 * minute / 60; //Math.PI*2/12*i;
		ctx.rotate(rad);
		ctx.beginPath();
		ctx.lineCap = 'round';
		ctx.moveTo(0, 10);
		ctx.lineTo(0, -(r - 80));
	 	ctx.strokeStyle = randColor();
	 	ctx.stroke();
	 	ctx.restore();
	};



	var drawMinute = function(minute) {
		ctx.save();
		var rad = 6 * 2 * Math.PI / 360 * minute; //Math.PI*2/12*i;
		ctx.beginPath();
		ctx.rotate(rad);
		ctx.lineWidth = 7;
		ctx.lineCap = 'round';
		ctx.moveTo(0, 10);
		ctx.lineTo(0, -(r - 60));
	 	ctx.strokeStyle = randColor();
	 	ctx.stroke();
	 	ctx.restore();
	};


	var drawSecond = function(second) {
		ctx.save();
		var rad = 6 * 2 * Math.PI / 360 * second; //Math.PI*2/12*i;
		ctx.beginPath();
		ctx.rotate(rad);
		ctx.lineWidth = 3;
		ctx.lineCap = 'round';
		ctx.moveTo(0, 10);
		ctx.lineTo(0, -(r - 50));
	 	ctx.strokeStyle = randColor();
	 	ctx.stroke();
	 	ctx.restore();
	};

	var randColor = function() {
		return '#' + ((~~(Math.random() * 0xffffff)) | 0x800000).toString(16);
	};

	var draw = function() {
		var now = new Date();
		ctx.clearRect(0, 0, w, h);
		ctx.save();
		drawArc();
		drawHour(now.getHours(), now.getMinutes());
		drawMinute(now.getMinutes());
		drawSecond(now.getSeconds());

		ctx.beginPath();
		ctx.fillStyle = randColor();
		ctx.arc(0, 0, 5, 0, 2 * Math.PI);
		ctx.fill();
		ctx.restore();
	};


	draw();

	setInterval(function() {
		draw();
	}, 1000);

})(document, window);