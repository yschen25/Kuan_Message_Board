$(function(){

	// Send message by click btn
	$('.btn').on('click', function(){
		sendMeassage();
	});

	// Send message by enter
	$('body').on('keydown', function(e){

		if(e.keyCode == 13){
			e.preventDefault();
			sendMeassage();
		}

	});

	// Close alert
	$('.close').on('click', function(){
     	$('.alert').hide();
	});

	// Clear textarea text for IE and Edge
	window.onbeforeunload = function() {
		$('.message').val('');
 	}
		
	// Message function
	function sendMeassage(){

		var message = $('.message').val();

		if(message.replace(/\s+/g,"") == ""){
			$('.alert').show();
			return;
		}	

		if(message.replace(/\s+/g,"").toLowerCase() == 'kuan==god'){
	     	kuan();
			$('#container').append('<audio loop src="./music/NyanCat.mp3"></audio>');
	     	$('audio')[0].play();
			return;
		}

		$.ajax({
			'type' : 'POST',
			'url'  : 'wbms/sendMessage.php',
			'data' : { 'message' : message },
			beforeSend : function(){
				console.log('loading');
			},
			success : function(data){
				console.log(data);
				if(data.status){
		            $('.alert').show();
		            $('.alert p').text('Kuan thanks you for your message');
                    $('.close').on('click', function(){
                        $('.alert').hide();
                        window.location.reload();
                    });
				}else{
					$('.alert').show();
		            $('.alert p').text('Message sending failed, plz contact aurthor QAQ');
                    $('.close').on('click', function(){
                        $('.alert').hide();
                        window.location.reload();
                    });
				}
			}
		})
	}

	function kuan(){
		
			var kuan01 = setInterval(function(){
							var top = Math.floor((Math.random() * 100) + 1);
							var left = Math.floor((Math.random() * 200) + 1);
							$('body').append('<img class="kuanImg" style="top:' + top + 'px;left:'+ left + 'px;" src="./images/kuan_nyan_cat.gif">');
						}, 100)

			var kuan02 = setInterval(function(){
							var top = Math.floor((Math.random() * 500) + 1);
							var left = Math.floor((Math.random() * 1000) + 1);
							$('body').append('<img class="kuanImg" style="top:' + top + 'px;left:'+ left + 'px;" src="./images/kuan_nyan_cat.gif">');
						}, 200)

			var kuan03 = setInterval(function(){
							var top = Math.floor((Math.random() * 1000) + 1);
							var left = Math.floor((Math.random() * 8000) + 1);
							$('body').append('<img class="kuanImg" style="top:' + top + 'px;left:'+ left + 'px;" src="./images/kuan_nyan_cat.gif">');
						}, 300)

			var kuan04 = setInterval(function(){
							var top = Math.floor((Math.random() * 1500) + 1);
							var left = Math.floor((Math.random() * 500) + 1);
							$('body').append('<img class="kuanImg" style="top:' + top + 'px;left:'+ left + 'px;" src="./images/kuan_nyan_cat.gif">');
						}, 400)

			stopKuan();
			
			function stopKuan(){

				setInterval(function(){
					clearInterval(kuan01);
					clearInterval(kuan02);
					clearInterval(kuan03);
					clearInterval(kuan04);
				}, 10000)

			}
	}
	
	// Console style
	var consoleStyle1 = "padding:5px 10px; margin: 10px; border-radius: 5px;background:linear-gradient(#02cccc,#016b6b); color:#fff; font-size:20px;";
	var consoleStyle2 = "padding:5px 10px; margin: 10px; border-radius: 5px;background: linear-gradient(#fc812f, #c45003); color: #fff; font-size: 22px";
	var consoleStyle3 = "color:#0d56c6; margin: 5px 0; font-size:22px; font-Weight:600";
	var consoleStyle4 = "color:#ea2b04; font-size:24px; font-Weight:600";
	var consoleStyle5 = "margin-top:190px;";
	var consoleStyle6 = "margin-top:80px;";
	console.log("%c You are sneaking, aren't you?", consoleStyle1);
	console.log("%c", consoleStyle5);
	console.log("%c Nothing here, ok? ", consoleStyle2);
	console.log("%c ", consoleStyle6);
	console.log("%c Fine, just type %c Kuan==God %c in the message box 'n' send it", consoleStyle3, consoleStyle4, consoleStyle3);

	// Remove 000webhost logo
	$('[title="Hosted on free web hosting 000webhost.com. Host your own website for FREE."]').parent().remove();

	// Draw background
	var camera, scene, renderer;
	var texture_placeholder,
	isUserInteracting = false,
	onMouseDownMouseX = 0, onMouseDownMouseY = 0,
	onPointerDownPointerX = 0, onPointerDownPointerY = 0,
	onPointerDownLon = 0, onPointerDownLat = 0,
	lon = 90, onMouseDownLon = 0,
	lat = 0, onMouseDownLat = 0,
	phi = 0, theta = 0,
	target = new THREE.Vector3();

	init();
	animate();

	function init(){

		var container, mesh;
		container = document.getElementById('container');
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1100);
		scene = new THREE.Scene();

		texture_placeholder = document.createElement('canvas');
		texture_placeholder.width = 128;
		texture_placeholder.height = 128;

		var context = texture_placeholder.getContext('2d');
		context.fillStyle = 'rgb(200, 200, 200)';
		context.fillRect(0, 0, texture_placeholder.width, texture_placeholder.height);

		// Random background images
		var x = Math.floor((Math.random() * 10) + 1);
		if(x == 1){

			var materials = [
				loadTexture( './images/space014.jpg' ),
				loadTexture( './images/space012.jpg' ),
				loadTexture( './images/space011.jpg' ),
				loadTexture( './images/space016.jpg' ),
				loadTexture( './images/space013.jpg' ),
				loadTexture( './images/space015.jpg' )
			]

		}else if(x == 2){

			var materials = [
				loadTexture( './images/space024.jpg' ),
				loadTexture( './images/space022.jpg' ),
				loadTexture( './images/space021.jpg' ),
				loadTexture( './images/space026.jpg' ),
				loadTexture( './images/space023.jpg' ),
				loadTexture( './images/space025.jpg' )
			]

		}else if(x == 3){

			$('.text').css('text-shadow', '3px 4px 4px #4c4b4b');

			var materials = [
				loadTexture( './images/space034.jpg' ),
				loadTexture( './images/space032.jpg' ),
				loadTexture( './images/space031.jpg' ),
				loadTexture( './images/space036.jpg' ),
				loadTexture( './images/space033.jpg' ),
				loadTexture( './images/space035.jpg' )
			]

		}else if(x == 4){

			var materials = [
				loadTexture( './images/space044.jpg' ),
				loadTexture( './images/space042.jpg' ),
				loadTexture( './images/space041.jpg' ),
				loadTexture( './images/space046.jpg' ),
				loadTexture( './images/space043.jpg' ),
				loadTexture( './images/space045.jpg' )
			]

		}else if(x == 5){

			var materials = [
				loadTexture( './images/space054.jpg' ),
				loadTexture( './images/space052.jpg' ),
				loadTexture( './images/space051.jpg' ),
				loadTexture( './images/space056.jpg' ),
				loadTexture( './images/space053.jpg' ),
				loadTexture( './images/space055.jpg' )
			]

		}else if(x == 6){

			var materials = [
				loadTexture( './images/space064.jpg' ),
				loadTexture( './images/space062.jpg' ),
				loadTexture( './images/space061.jpg' ),
				loadTexture( './images/space066.jpg' ),
				loadTexture( './images/space063.jpg' ),
				loadTexture( './images/space065.jpg' )
			]
			
		}else if(x == 7){

			$('.text').css('text-shadow', '3px 4px 4px #616161');

			var materials = [
				loadTexture( './images/space074.jpg' ),
				loadTexture( './images/space072.jpg' ),
				loadTexture( './images/space071.jpg' ),
				loadTexture( './images/space076.jpg' ),
				loadTexture( './images/space073.jpg' ),
				loadTexture( './images/space075.jpg' )
			]

		}else if(x == 8){

			$('.text').css({'color' : '#231717',
				            'text-shadow' : 'none'});

			var materials = [
				loadTexture( './images/space084.jpg' ),
				loadTexture( './images/space082.jpg' ),
				loadTexture( './images/space081.jpg' ),
				loadTexture( './images/space086.jpg' ),
				loadTexture( './images/space083.jpg' ),
				loadTexture( './images/space085.jpg' )
			]

		}else{

			var materials = [
				loadTexture( './images/space094.jpg' ),
				loadTexture( './images/space092.jpg' ),
				loadTexture( './images/space091.jpg' ),
				loadTexture( './images/space096.jpg' ),
				loadTexture( './images/space093.jpg' ),
				loadTexture( './images/space095.jpg' )
			]

		};

		var geometry = new THREE.BoxBufferGeometry(300, 300, 300, 7, 7, 7);
		geometry.scale(-1, 1, 1);

		mesh = new THREE.Mesh(geometry, materials);
		scene.add(mesh);

		renderer = new THREE.CanvasRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);

		document.addEventListener('mousedown', onDocumentMouseDown, false);
		document.addEventListener('mousemove', onDocumentMouseMove, false);
		document.addEventListener('mouseup', onDocumentMouseUp, false);
		document.addEventListener('wheel', onDocumentMouseWheel, false);

		document.addEventListener('touchstart', onDocumentTouchStart, false);
		document.addEventListener('touchmove', onDocumentTouchMove, false);

		window.addEventListener('resize', onWindowResize, false);
	}

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);

	}

	function loadTexture(path) {

		var texture = new THREE.Texture(texture_placeholder);
		var material = new THREE.MeshBasicMaterial({map: texture, overdraw: 0.5});

		var image = new Image();
		image.onload = function () {
			texture.image = this;
			texture.needsUpdate = true;
		};

		image.src = path;
		return material;
	}

	function onDocumentMouseDown(event) {

		event.preventDefault();
		isUserInteracting = true;

		onPointerDownPointerX = event.clientX;
		onPointerDownPointerY = event.clientY;

		onPointerDownLon = lon;
		onPointerDownLat = lat;

	}

	function onDocumentMouseMove(event) {

		if (isUserInteracting === true) {
			lon = (onPointerDownPointerX - event.clientX) * 0.1 + onPointerDownLon;
			lat = (event.clientY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
		}

	}

	function onDocumentMouseUp(event) {

		isUserInteracting = false;

	}

	function onDocumentMouseWheel(event) {

		var fov = camera.fov + event.deltaY * 0.05;
		camera.fov = THREE.Math.clamp(fov, 10, 75);
		camera.updateProjectionMatrix();

	}


	function onDocumentTouchStart(event) {

		if (event.touches.length == 1) {
			event.preventDefault();

			onPointerDownPointerX = event.touches[0].pageX;
			onPointerDownPointerY = event.touches[0].pageY;

			onPointerDownLon = lon;
			onPointerDownLat = lat;
		}

	}

	function onDocumentTouchMove(event) {

		if (event.touches.length == 1) {
			event.preventDefault();

			lon = (onPointerDownPointerX - event.touches[0].pageX) * 0.1 + onPointerDownLon;
			lat = (event.touches[0].pageY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
		}

	}

	function animate() {

		requestAnimationFrame(animate);
		update();

	}

	function update() {

		if (isUserInteracting === false) lon += 0.06;

		lat = Math.max(-85, Math.min(85, lat));
		phi = THREE.Math.degToRad(90 - lat);
		theta = THREE.Math.degToRad(lon);

		target.x = 500 * Math.sin(phi) * Math.cos(theta);
		target.y = 500 * Math.cos(phi);
		target.z = 500 * Math.sin(phi) * Math.sin(theta);

		camera.lookAt(target);

		renderer.render(scene, camera);

	}

});
