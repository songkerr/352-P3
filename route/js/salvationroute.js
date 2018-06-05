
	function initMap() {
		var myLatlng = {lat: -41.2931, lng: 174.7384}; //track coords

  	  	var map = new google.maps.Map(document.getElementById('routemap'), {
    		zoom: 15.5,
  		  center: myLatlng
  	  	});

  	  	var marker = new google.maps.Marker({
    		position: myLatlng,
    		// map: map, //hides marker -because its currently located at track so map center pans to track coords
  		  title: 'Click to zoom'
  	  	});

  	  	map.addListener('center_changed', function() {
			window.setTimeout(function() {
				// map.panTo(marker.getPosition());
			}, 3000);
		});

  	  	marker.addListener('click', function() {
			map.setZoom(17);
      	  map.setCenter(marker.getPosition());
  		});

		//wrights hill loop track
    	var wrightshillCoordinates = [
			//start point
			{lat: -41.2938, lng: 174.7447},
			{lat: -41.2939, lng: 174.7441},
			{lat: -41.2930, lng: 174.7431},
			{lat: -41.2929, lng: 174.7424},
			{lat: -41.2921, lng: 174.7416},
			{lat: -41.2923, lng: 174.7406},
			{lat: -41.2935, lng: 174.7399},
			{lat: -41.2930, lng: 174.7393},
			{lat: -41.2931, lng: 174.7384},
			{lat: -41.2934, lng: 174.7380},
			{lat: -41.2928, lng: 174.7375},
			{lat: -41.2935, lng: 174.7369},
			{lat: -41.2927, lng: 174.7353},
			{lat: -41.2929, lng: 174.7348},
			{lat: -41.2934, lng: 174.7358},
			{lat: -41.2941, lng: 174.7365},
			{lat: -41.2943, lng: 174.7372},
			{lat: -41.2945, lng: 174.7375},
			{lat: -41.2955, lng: 174.7381},
			{lat: -41.2956, lng: 174.7384},
			
    	];
		
 
		  var wrightshilltrack = new google.maps.Polyline({
		    path: wrightshillCoordinates,
		    geodesic: true,
		    strokeColor: 'green',
			fillColor:'green',
		    strokeOpacity: .75,
			strokeWeight: 5
		  });
		  

		  wrightshilltrack.setMap(map);
		  
		  google.maps.event.addListener(wrightshilltrack,  'mouseover', function(latlng) {
		  wrightshilltrack.setOptions({strokeColor: 'white'});			 
		  });

		  google.maps.event.addListener(wrightshilltrack, 'mouseout', function(latlng) {
		  wrightshilltrack.setOptions({strokeColor: 'green'});
		  });
	
      } 