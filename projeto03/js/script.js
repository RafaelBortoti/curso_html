window.onload = function() {
	
	var map;
	function initialize() {
		var mapProp = {
			center: new google.maps.LatLng(-16.571634450580948,-49.415052803425674),
			scrollwheel:false,
			zoom:12,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		}

		map = new google.maps.Map(document.getElementById("mapa"), mapProp);
	}

	function addMarker(lat,lng,icon,content) {
		var latLng = {'lat':lat, 'lng':lng};

		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		})

		google.maps.event.addListener(marker, 'click', function() {
			infoWindow.open(map,marker);
		});
		
	}

	initialize();

	var conteudo = '<p style="color:black;font-size:14px;"> Rua SF 62 - Trindade </p>';
	addMarker(-16.571634450580948,-49.415052803425674, '', conteudo);




}