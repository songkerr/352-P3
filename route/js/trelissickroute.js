

      function initMap() {
		  var myLatlng = {lat: -41.2591, lng: 174.7711}; //one of the track coordinates 
		
        var map = new google.maps.Map(document.getElementById('routemap'), {
          zoom: 14.5,
		  center: myLatlng
        });
		
        var marker = new google.maps.Marker({
          position: myLatlng,
          // map: map, //comment out to see the marker - currently hiding on track location to make map center pan to track
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

 
		//trelissick park
		var trelissickparkCoordinates = [
			//start point 
		    {lat: -41.2581, lng: 174.7821},
		    {lat: -41.2587, lng: 174.7815},
  		    {lat: -41.2580, lng: 174.7799},
  		    {lat: -41.2575, lng: 174.7788},
  		    {lat: -41.2571, lng: 174.7788},
  		    {lat: -41.2568, lng: 174.7783},
  		    {lat: -41.2566, lng: 174.7770},
  		    {lat: -41.2569, lng: 174.7761},
  		    {lat: -41.2572, lng: 174.7759},
  		    {lat: -41.2574, lng: 174.7755}, 		   			
  		    {lat: -41.2583, lng: 174.7754},
			{lat: -41.2583, lng: 174.7743},
  		    {lat: -41.2577, lng: 174.7732},
			{lat: -41.2578, lng: 174.7725},
  		    {lat: -41.2581, lng: 174.7722},
			{lat: -41.2583, lng: 174.7717},	    
  		    {lat: -41.2591, lng: 174.7711},
  		    {lat: -41.2599, lng: 174.7714},
  		    {lat: -41.2591, lng: 174.7711},//fork in the road
			
  		    {lat: -41.2599, lng: 174.7703},
  		    {lat: -41.2592, lng: 174.7690},
  		    {lat: -41.2585, lng: 174.7689},
  		    {lat: -41.2583, lng: 174.7691},
  		    {lat: -41.2582, lng: 174.7683},
  		    {lat: -41.2576, lng: 174.7681},
  		    {lat: -41.2575, lng: 174.7677},
  		    {lat: -41.2573, lng: 174.7676},
  		    {lat: -41.2572, lng: 174.7678},
  		    {lat: -41.2570, lng: 174.7676},
  		    {lat: -41.2569, lng: 174.7671},
  		    {lat: -41.2562, lng: 174.7673},
  		    {lat: -41.2561, lng: 174.7671},
  		    {lat: -41.2559, lng: 174.7672},
  		    {lat: -41.2560, lng: 174.7672},
  		    {lat: -41.2560, lng: 174.7671},
  		    {lat: -41.2558, lng: 174.7680},
  		    {lat: -41.2561, lng: 174.7676},
  		    {lat: -41.2562, lng: 174.7676},
  		    {lat: -41.2564, lng: 174.7676},
  		    {lat: -41.2565, lng: 174.7676},
  		    {lat: -41.2565, lng: 174.7677},
  		    {lat: -41.2564, lng: 174.7677},
  		    {lat: -41.2564, lng: 174.7679},
  		    {lat: -41.2567, lng: 174.7688},
  		    {lat: -41.2569, lng: 174.7689},
  		    {lat: -41.2576, lng: 174.7686},
  		    {lat: -41.2577, lng: 174.7690},
  		    {lat: -41.2577, lng: 174.7697},
  		    {lat: -41.2581, lng: 174.7700},
  		    {lat: -41.2585, lng: 174.7701},
  		    {lat: -41.2588, lng: 174.7700},
  		    {lat: -41.2595, lng: 174.7706},
  		    {lat: -41.2591, lng: 174.7711},
			
  		    {lat: -41.2599, lng: 174.7714},
			{lat: -41.2591, lng: 174.7711},
			{lat: -41.2583, lng: 174.7717},	
			{lat: -41.2583, lng: 174.7717},	
			{lat: -41.2578, lng: 174.7725},
  		    {lat: -41.2577, lng: 174.7732},
			{lat: -41.2583, lng: 174.7743},
  		    {lat: -41.2583, lng: 174.7754},
  		    {lat: -41.2574, lng: 174.7755},
  		    {lat: -41.2572, lng: 174.7759},
  		    {lat: -41.2569, lng: 174.7761},
  		    {lat: -41.2566, lng: 174.7770},
  		    {lat: -41.2568, lng: 174.7783},
  		    {lat: -41.2571, lng: 174.7788},
  		    {lat: -41.2575, lng: 174.7788},
  		    {lat: -41.2580, lng: 174.7799},
		    {lat: -41.2587, lng: 174.7815},
		    {lat: -41.2581, lng: 174.7821}
		  ];
		
		  
		  var trelissickparktrack = new google.maps.Polygon({
		    path: trelissickparkCoordinates,
		    geodesic: true,
		    strokeColor: '#FF0000',
  			fillColor:'red',
			  
		    strokeOpacity: .75,
			strokeWeight: 5
		  });

		  trelissickparktrack.setMap(map);
		 

		  google.maps.event.addListener(trelissickparktrack,  'mouseover', function(latlng) {
		      trelissickparktrack.setOptions({strokeColor: 'white'});		 
		  });

		  google.maps.event.addListener(trelissickparktrack, 'mouseout', function(latlng) {
		      trelissickparktrack.setOptions({strokeColor: 'red'});
		  });
		  
      }