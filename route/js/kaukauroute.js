function initMap() {
		  var myLatlng = {lat: -41.2401, lng: 174.7832}; //track coords
		
        var map = new google.maps.Map(document.getElementById('routemap'), {
          zoom: 14.5,
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

 
		  //mount kaukau summit  -khandallah park loop
  		var mtkaukauCoordinates = [
  		    {lat: -41.2451, lng: 174.7852},
			{lat: -41.2444, lng: 174.7855},//fork in the trail
			{lat: -41.2442, lng: 174.7850},
			{lat: -41.2444, lng: 174.7852},
			{lat: -41.2435, lng: 174.7847},
			{lat: -41.2442, lng: 174.7842},
			{lat: -41.2442, lng: 174.7838},
			{lat: -41.2442, lng: 174.7835},
			{lat: -41.2440, lng: 174.7836},
			{lat: -41.2440, lng: 174.7839},
			{lat: -41.2436, lng: 174.7837},
			{lat: -41.2435, lng: 174.7840},
			{lat: -41.2433, lng: 174.7838},
			{lat: -41.2432, lng: 174.7839},
			{lat: -41.2427, lng: 174.7838},
			{lat: -41.2423, lng: 174.7840},
			{lat: -41.2418, lng: 174.7846},
			{lat: -41.2417, lng: 174.7843},
			{lat: -41.2412, lng: 174.7838},
			{lat: -41.2410, lng: 174.7834},
			{lat: -41.2406, lng: 174.7836},
			{lat: -41.2401, lng: 174.7832},
			{lat: -41.2396, lng: 174.7835},
			{lat: -41.2378, lng: 174.7830},
			{lat: -41.2366, lng: 174.7808},
			{lat: -41.2353, lng: 174.7808},
			{lat: -41.2341, lng: 174.7798},
			{lat: -41.2322, lng: 174.7811},
			{lat: -41.2311, lng: 174.7829},
			{lat: -41.2309, lng: 174.7838},
			{lat: -41.2305, lng: 174.7850},
			{lat: -41.2299, lng: 174.7862},
			{lat: -41.2298, lng: 174.7868},
			{lat: -41.2294, lng: 174.7869},
			{lat: -41.2294, lng: 174.7874},
			{lat: -41.2296, lng: 174.7879},
			{lat: -41.2298, lng: 174.7879},
			{lat: -41.2300, lng: 174.7884},
			{lat: -41.2318, lng: 174.7880},
			{lat: -41.2332, lng: 174.7875},
			{lat: -41.2334, lng: 174.7870},
			{lat: -41.2342, lng: 174.7871},
			{lat: -41.2349, lng: 174.7877},
			{lat: -41.2356, lng: 174.7875},
			{lat: -41.2362, lng: 174.7877},
			{lat: -41.2377, lng: 174.7885},
			{lat: -41.2380, lng: 174.7886},
			{lat: -41.2384, lng: 174.7884},
			{lat: -41.2401, lng: 174.7884},
			{lat: -41.2403, lng: 174.7882},
			{lat: -41.2410, lng: 174.7884},
			{lat: -41.2411, lng: 174.7886},
			{lat: -41.2414, lng: 174.7880},
			{lat: -41.2414, lng: 174.7882},
			{lat: -41.2415, lng: 174.7880},
			{lat: -41.2416, lng: 174.7878},
			{lat: -41.2412, lng: 174.7872},
			{lat: -41.2411, lng: 174.7866},
			{lat: -41.2416, lng: 174.7860},
			{lat: -41.2419, lng: 174.7866},
			{lat: -41.2420, lng: 174.7885},
			{lat: -41.2434, lng: 174.7859},
			{lat: -41.2435, lng: 174.7858},
			{lat: -41.2444, lng: 174.7855},//fork in the trail
  		    {lat: -41.2451, lng: 174.7852}	
  		  ];	
		  
		  var mtkaukautrack = new google.maps.Polygon({
		    path: mtkaukauCoordinates,
		    geodesic: true,
		    strokeColor: 'blue',
  			fillColor:'blue',
		    strokeOpacity: .75,
			strokeWeight: 5
		  });

		  mtkaukautrack.setMap(map);		 

		  google.maps.event.addListener(mtkaukautrack,  'mouseover', function(latlng) {
		      mtkaukautrack.setOptions({strokeColor: 'white'});		 
		  });

		  google.maps.event.addListener(mtkaukautrack, 'mouseout', function(latlng) {
		      mtkaukautrack.setOptions({strokeColor: 'blue'});
		  });
		  
      }
	  
      
	  
