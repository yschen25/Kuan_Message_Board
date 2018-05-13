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
		
	// Message function
	function sendMeassage(){

		let message = $('.message').val();

		if(message.replace(/\s+/g,"") == ""){
			$('.alert').show();
			return;
		}	

		if(message.replace(/\s+/g,"").toLowerCase() == 'kuan==god'){
	     	kuan();
			$('#container').append('<audio src="./music/NyanCat.mp3"></audio>');
	     	$('audio')[0].play();
			return;
		}

		$.ajax({
			'type' : 'POST',
			'url'  : 'wbms/sendMessage.php',
			'data' : { 'message' : message },
			beforeSend:function(){
				console.log('loading');
			},
			sucess:function(data){
				console.log(data);
				if(data.status){
		            $('.alert').show();
		            $('.alert p').text('sucess');
				}else{
					$('.alert').show();
		            $('.alert p').text('Send message fail, plz contact aurthor');
				}
			}
		})
	}

	function kuan(){
		
			setInterval(function(){
				let top = Math.floor((Math.random() * 10) + 1);
				let left = Math.floor((Math.random() * 200) + 1);
				$('body').append('<img class="kuanImg" style="top:' + top + 'px;left:'+ left + 'px;" src="./images/kuan_nyan_cat.gif">');
			}, 100)

			setInterval(function(){
				let top = Math.floor((Math.random() * 500) + 1);
				let left = Math.floor((Math.random() * 1000) + 1);
				$('body').append('<img class="kuanImg" style="top:' + top + 'px;left:'+ left + 'px;" src="./images/kuan_nyan_cat.gif">');
			}, 200)

			setInterval(function(){
				let top = Math.floor((Math.random() * 1500) + 1);
				let left = Math.floor((Math.random() * 8000) + 1);
				$('body').append('<img class="kuanImg" style="top:' + top + 'px;left:'+ left + 'px;" src="./images/kuan_nyan_cat.gif">');
			}, 300)

			setInterval(function(){
				let top = Math.floor((Math.random() * 2000) + 1);
				let left = Math.floor((Math.random() * 500) + 1);
				$('body').append('<img class="kuanImg" style="top:' + top + 'px;left:'+ left + 'px;" src="./images/kuan_nyan_cat.gif">');
			}, 500)

	}
	
	// Console style
	let consoleStyle1 = "padding:5px 10px; margin: 10px; border-radius: 5px;background:linear-gradient(#02cccc,#016b6b); color:#fff; font-size:20px;";
	let consoleStyle2 = "padding:5px 10px; margin: 10px; border-radius: 5px;background: linear-gradient(#fc812f, #c45003); color: #fff; font-size: 22px";
	let consoleStyle3 = "color:#0d56c6; margin: 5px 0; font-size:22px; font-Weight:600";
	let consoleStyle4 = "color:#ea2b04; font-size:24px; font-Weight:600";
	let consoleStyle5 = "margin-top:190px;";
	let consoleStyle6 = "margin-top:80px;";
	console.log("%c You are sneaking, aren't you?", consoleStyle1);
	console.log("%c", consoleStyle5);
	console.log("%c Nothing here, ok? ", consoleStyle2);
	console.log("%c ", consoleStyle6);
	console.log("%c Fine, just type %c Kuan==God %c in the message box 'n' send it", consoleStyle3, consoleStyle4, consoleStyle3);

	// Draw background
	let camera, scene, renderer,
	texture_placeholder,
	isUserInteracting = false,
	onMouseDownMouseX = 0, onMouseDownMouseY = 0,
	lon = 90, onMouseDownLon = 0,
	lat = 0, onMouseDownLat = 0,
	phi = 0, theta = 0,
	target = new THREE.Vector3();

	init();
	animate();

	function init(){

		let container, mesh;
		container = $('#container')[0];
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );
		scene = new THREE.Scene();

		texture_placeholder = document.createElement('canvas');
		var context = texture_placeholder.getContext('2d');
		context.fillRect(0, 0, texture_placeholder.width, texture_placeholder.height);

		// Random background images
		let x = Math.floor((Math.random() * 10) + 1);
		if(x == 1){

			$('.text, .aurthor, .statement').addClass('universeTextStyle');

			var materials = [
				loadTexture( './images/space14.jpg' ),
				loadTexture( './images/space12.jpg' ),
				loadTexture( './images/space11.jpg' ),
				loadTexture( './images/space16.jpg' ),
				loadTexture( './images/space13.jpg' ),
				loadTexture( './images/space15.jpg' )
			]

		}else if(x == 2){

			var materials = [
				loadTexture( './images/space24.jpg' ),
				loadTexture( './images/space22.jpg' ),
				loadTexture( './images/space21.jpg' ),
				loadTexture( './images/space26.jpg' ),
				loadTexture( './images/space23.jpg' ),
				loadTexture( './images/space25.jpg' )
			]

		}else if(x == 3){

			var materials = [
				loadTexture( './images/space34.jpg' ),
				loadTexture( './images/space32.jpg' ),
				loadTexture( './images/space31.jpg' ),
				loadTexture( './images/space36.jpg' ),
				loadTexture( './images/space33.jpg' ),
				loadTexture( './images/space35.jpg' )
			]

		}else if(x == 4){

			var materials = [
				loadTexture( './images/space44.jpg' ),
				loadTexture( './images/space42.jpg' ),
				loadTexture( './images/space41.jpg' ),
				loadTexture( './images/space46.jpg' ),
				loadTexture( './images/space43.jpg' ),
				loadTexture( './images/space45.jpg' )
			]

		}else if(x == 5){

			$('.text').css('text-shadow', '3px 4px 4px #000');

			var materials = [
				loadTexture( './images/space54.jpg' ),
				loadTexture( './images/space52.jpg' ),
				loadTexture( './images/space51.jpg' ),
				loadTexture( './images/space56.jpg' ),
				loadTexture( './images/space53.jpg' ),
				loadTexture( './images/space55.jpg' )
			]

		}else if(x == 6){

			var materials = [
				loadTexture( './images/space64.jpg' ),
				loadTexture( './images/space62.jpg' ),
				loadTexture( './images/space61.jpg' ),
				loadTexture( './images/space66.jpg' ),
				loadTexture( './images/space63.jpg' ),
				loadTexture( './images/space65.jpg' )
			]
			
		}else if(x==7){

			var materials = [
				loadTexture( './images/space74.jpg' ),
				loadTexture( './images/space72.jpg' ),
				loadTexture( './images/space71.jpg' ),
				loadTexture( './images/space76.jpg' ),
				loadTexture( './images/space73.jpg' ),
				loadTexture( './images/space75.jpg' )
			]

		}else{

			$('.text').css('text-shadow', '4px 5px 4px #000');
			$('.btn').css('background-color','#33a1ad');
			$('.btn:before').css('background-color','#4ec3bf');

			var materials = [
				loadTexture( './images/space84.jpg' ),
				loadTexture( './images/space82.jpg' ),
				loadTexture( './images/space81.jpg' ),
				loadTexture( './images/space86.jpg' ),
				loadTexture( './images/space83.jpg' ),
				loadTexture( './images/space85.jpg' )
			]

		};

		mesh = new THREE.Mesh( new THREE.BoxGeometry(300, 300, 300, 7, 7, 7), new THREE.MultiMaterial( materials ) );
		mesh.scale.x = -1;
		scene.add(mesh);

		for(let i=0, l=mesh.geometry.vertices.length; i<l; i ++){
			let vertex = mesh.geometry.vertices[i];
			vertex.normalize();
			vertex.multiplyScalar( 550 );
		}

		renderer = new THREE.CanvasRenderer();
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);

		$(document).on('mousedown', function(e){ onDocumentMouseDown(e);})
		$(document).on('mousemove', function(e){ onDocumentMouseMove(e);})
		$(document).on('mouseup', function(e){ onDocumentMouseUp(e);})
		$(window).on('resize', function(){onWindowResize()})
	}

	function onWindowResize(){
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function loadTexture(path){
		let texture = new THREE.Texture( texture_placeholder );
		let material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );
		let image = new Image();

		image.onload = function () {
			texture.image = this;
			texture.needsUpdate = true;
		};

		image.src = path;
		return material;
	}

	function onDocumentMouseDown(e){
		e.preventDefault();

		isUserInteracting = true;

		onPointerDownPointerX = e.clientX;
		onPointerDownPointerY = e.clientY;

		onPointerDownLon = lon;
		onPointerDownLat = lat;
	}

	function onDocumentMouseMove(e){
		if(isUserInteracting === true){
			lon = (onPointerDownPointerX - e.clientX) * 0.1 + onPointerDownLon;
			lat = (e.clientY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
		}
	}

	function onDocumentMouseUp(e){
		isUserInteracting = false;
	}

	function onDocumentTouchStart(e){
		if(e.touches.length == 1){

			e.preventDefault();

			onPointerDownPointerX = e.touches[0].pageX;
			onPointerDownPointerY = e.touches[0].pageY;

			onPointerDownLon = lon;
			onPointerDownLat = lat;
		}
	}

	function onDocumentTouchMove(e){
		if(e.touches.length == 1){

			e.preventDefault();

			lon = (onPointerDownPointerX - e.touches[0].pageX) * 0.1 + onPointerDownLon;
			lat = (e.touches[0].pageY - onPointerDownPointerY) * 0.1 + onPointerDownLat;
		}
	}

	function animate(){
		requestAnimationFrame(animate);
		update();
	}

	function update(){
		if (isUserInteracting === false) lon += 0.1;

		lat = Math.max(- 85, Math.min( 85, lat));
		phi = THREE.Math.degToRad( 90 - lat);
		theta = THREE.Math.degToRad(lon);

		target.x = 500 * Math.sin(phi) * Math.cos(theta);
		target.y = 500 * Math.cos(phi);
		target.z = 500 * Math.sin(phi) * Math.sin(theta);

		camera.position.copy(target).negate();
		camera.lookAt(target);

		renderer.render(scene, camera);
	}

});
