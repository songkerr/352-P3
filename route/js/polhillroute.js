
	function initMap() {
		var myLatlng = 	{lat: -41.3021, lng: 174.7553}; //track coords

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

		//pohill reserve track
    	var pohillCoordinates = [
			//start point
			{lat: -41.2938, lng: 174.7612},
			{lat: -41.2945, lng: 174.7613},
			{lat: -41.2953, lng: 174.7603},
			{lat: -41.2955, lng: 174.7611},
			{lat: -41.2951, lng: 174.7612},
			{lat: -41.2950, lng: 174.7616},
			{lat: -41.2947, lng: 174.7616},
			{lat: -41.2947, lng: 174.7619},
			{lat: -41.2951, lng: 174.7618},
			{lat: -41.2953, lng: 174.7614},
			{lat: -41.2968, lng: 174.7606},
			{lat: -41.2970, lng: 174.7603},
			{lat: -41.2976, lng: 174.7600},
			{lat: -41.2976, lng: 174.7602},
			{lat: -41.2970, lng: 174.7615},
			{lat: -41.2974, lng: 174.7611},
			{lat: -41.2977, lng: 174.7609},
			{lat: -41.2987, lng: 174.7606},
			{lat: -41.3001, lng: 174.7589},
			{lat: -41.3021, lng: 174.7579},		
			{lat: -41.3013, lng: 174.7570},
			{lat: -41.3033, lng: 174.7572},		
			{lat: -41.3022, lng: 174.7561},		
			{lat: -41.3021, lng: 174.7553},
			{lat: -41.3031, lng: 174.7549},
			{lat: -41.3038, lng: 174.7537},
			{lat: -41.3030, lng: 174.7525},	
			{lat: -41.3038, lng: 174.7515},
			{lat: -41.3030, lng: 174.7503},		
			{lat: -41.3021, lng: 174.7503},
			{lat: -41.3018, lng: 174.7509},
			{lat: -41.3008, lng: 174.7506},		
			{lat: -41.3001, lng: 174.7508},
			{lat: -41.2992, lng: 174.7506},					
			{lat: -41.2986, lng: 174.7500},			
			{lat: -41.2984, lng: 174.7508},			
			{lat: -41.2979, lng: 174.7510},
			{lat: -41.2975, lng: 174.7506},
			{lat: -41.2970, lng: 174.7515},		
			{lat: -41.2978, lng: 174.7518},		
			{lat: -41.2979, lng: 174.7524},
			{lat: -41.2982, lng: 174.7520},
			{lat: -41.2982, lng: 174.7528},
			{lat: -41.2989, lng: 174.7525},
			{lat: -41.2979, lng: 174.7533},			
			{lat: -41.2991, lng: 174.7531},			
			{lat: -41.2993, lng: 174.7545},
			{lat: -41.2996, lng: 174.7548},
			{lat: -41.2997, lng: 174.7557},
			{lat: -41.2988, lng: 174.7561},
			{lat: -41.2984, lng: 174.7562},
			{lat: -41.2978, lng: 174.7570},
			{lat: -41.2973, lng: 174.7573},
			{lat: -41.2973, lng: 174.7578},
			{lat: -41.2965, lng: 174.7582},
			{lat: -41.2968, lng: 174.7585},
			{lat: -41.2967, lng: 174.7590},
			{lat: -41.2947, lng: 174.7598},
			{lat: -41.2942, lng: 174.7605}
	
			//end point
    	];
		
 
		  var pohilltrack = new google.maps.Polygon({
		    path: pohillCoordinates,
		    geodesic: true,
		    strokeColor: 'green',
			fillColor:'green',
		    strokeOpacity: .75,
			strokeWeight: 5
		  });
		  

		  pohilltrack.setMap(map);
		  
		  google.maps.event.addListener(pohilltrack,  'mouseover', function(latlng) {
		  pohilltrack.setOptions({strokeColor: 'white'});			 
		  });

		  google.maps.event.addListener(pohilltrack, 'mouseout', function(latlng) {
		  pohilltrack.setOptions({strokeColor: 'green'});
		  });
	
      }
	  
      
	  
	  

	  

     

      