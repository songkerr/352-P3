


      function initMap() {
        var myLatlng = {lat: -41.2673, lng: 174.7542};
		
        var map = new google.maps.Map(document.getElementById('routemap'), {
          zoom: 14.5,
		  center: myLatlng
        });
		
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
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
		

		//Otari skyline loop track
    	var otariskylineCoordinates = [
			//start point
			{lat: -41.2676, lng: 174.7585},
			{lat: -41.2675, lng: 174.7582},
			{lat: -41.2677, lng: 174.7578},    		
			{lat: -41.2678, lng: 174.7572},
			{lat: -41.2677, lng: 174.7571},			
			{lat: -41.2677, lng: 174.7567},
			{lat: -41.2673, lng: 174.7565},		
			{lat: -41.2672, lng: 174.7568},
    		{lat: -41.2668, lng: 174.7568},
			{lat: -41.2669, lng: 174.7560},			
			{lat: -41.2667, lng: 174.7557},
			{lat: -41.2667, lng: 174.7555},
			{lat: -41.2666, lng: 174.7556},
			{lat: -41.2666, lng: 174.7554},
			{lat: -41.2665, lng: 174.7554},			
			{lat: -41.2665, lng: 174.7560},
			{lat: -41.2661, lng: 174.7555},
			{lat: -41.2661, lng: 174.7554},
			{lat: -41.2673, lng: 174.7542}, //fork in the trail
			
			{lat: -41.2660, lng: 174.7552},
			{lat: -41.2660, lng: 174.7554},
			{lat: -41.2658, lng: 174.7550},
			{lat: -41.2658, lng: 174.7551},
			{lat: -41.2657, lng: 174.7550},
			{lat: -41.2657, lng: 174.7549},
			{lat: -41.2656, lng: 174.7550},
			{lat: -41.2654, lng: 174.7549},
			{lat: -41.2653, lng: 174.7551},
			{lat: -41.2653, lng: 174.7551},
			{lat: -41.2651, lng: 174.7549},
			{lat: -41.2650, lng: 174.7550},
			{lat: -41.2650, lng: 174.7553},
			{lat: -41.2649, lng: 174.7560},
			{lat: -41.2644, lng: 174.7567},
			{lat: -41.2642, lng: 174.7566},
			{lat: -41.2640, lng: 174.7563},
			{lat: -41.2639, lng: 174.7560},
			{lat: -41.2636, lng: 174.7557},
			{lat: -41.2628, lng: 174.7548},
			{lat: -41.2628, lng: 174.7541},
			{lat: -41.2631, lng: 174.7536},
			{lat: -41.2619, lng: 174.7522},
			{lat: -41.2618, lng: 174.7517},
			{lat: -41.2610, lng: 174.7522},
			{lat: -41.2596, lng: 174.7523},
			{lat: -41.2595, lng: 174.7511},
			{lat: -41.2590, lng: 174.7501},
			{lat: -41.2587, lng: 174.7494},
			{lat: -41.2578, lng: 174.7486},
			{lat: -41.2572, lng: 174.7476},
			{lat: -41.2568, lng: 174.7471},
			{lat: -41.2564, lng: 174.7466},
			{lat: -41.2566, lng: 174.7464},
			{lat: -41.2569, lng: 174.7465},
			{lat: -41.2569, lng: 174.7463},			
			{lat: -41.2572, lng: 174.7471},
			{lat: -41.2576, lng: 174.7469},
			{lat: -41.2578, lng: 174.7474},
			{lat: -41.2582, lng: 174.7472},
			{lat: -41.2583, lng: 174.7468},
			{lat: -41.2599, lng: 174.7472},
			{lat: -41.2614, lng: 174.7466},
			{lat: -41.2626, lng: 174.7466},
			{lat: -41.2630, lng: 174.7454},
			{lat: -41.2637, lng: 174.7454},
			{lat: -41.2637, lng: 174.7446},
			{lat: -41.2645, lng: 174.7446},
			{lat: -41.2646, lng: 174.7432},
			{lat: -41.2657, lng: 174.7433},
			{lat: -41.2662, lng: 174.7428},			
			{lat: -41.2670, lng: 174.7432},
			{lat: -41.2682, lng: 174.7422},
			{lat: -41.2685, lng: 174.7433},
			{lat: -41.2685, lng: 174.7442},
			{lat: -41.2687, lng: 174.7453},
			{lat: -41.2685, lng: 174.7459},
			{lat: -41.2685, lng: 174.7462},
			{lat: -41.2686, lng: 174.7462},
			{lat: -41.2693, lng: 174.7453},
			{lat: -41.2695, lng: 174.7449},
			{lat: -41.2695, lng: 174.7441},
			{lat: -41.2706, lng: 174.7437},
			{lat: -41.2706, lng: 174.7468},
			{lat: -41.2707, lng: 174.7491},
			{lat: -41.2695, lng: 174.7514},
			{lat: -41.2690, lng: 174.7526},
						
			{lat: -41.2673, lng: 174.7542}, //fork in the trail
			{lat: -41.2661, lng: 174.7554},	
			{lat: -41.2661, lng: 174.7555},
			{lat: -41.2665, lng: 174.7560},
			{lat: -41.2665, lng: 174.7554},
			{lat: -41.2666, lng: 174.7554},
			{lat: -41.2666, lng: 174.7556},
			{lat: -41.2667, lng: 174.7555},
			{lat: -41.2667, lng: 174.7557},
			{lat: -41.2669, lng: 174.7560},
    		{lat: -41.2668, lng: 174.7568},
			{lat: -41.2672, lng: 174.7568},
			{lat: -41.2673, lng: 174.7565},	
			{lat: -41.2677, lng: 174.7567},
			{lat: -41.2677, lng: 174.7571},
			{lat: -41.2678, lng: 174.7572},
			{lat: -41.2677, lng: 174.7578},  
			{lat: -41.2675, lng: 174.7582},
			{lat: -41.2676, lng: 174.7585}	
			//end point
    	];
		
 
		  var otariskylinetrack = new google.maps.Polygon({
		    path: otariskylineCoordinates,
		    geodesic: true,
		    strokeColor: 'blue',
			  fillColor: 'blue',
		    strokeOpacity: .75,
			strokeWeight: 5
		  });
		
		  otariskylinetrack.setMap(map);
		  
		  google.maps.event.addListener(otariskylinetrack,  'mouseover', function(latlng) {
		  otariskylinetrack.setOptions({strokeColor: 'white'});			 
		  });

		  google.maps.event.addListener(otariskylinetrack, 'mouseout', function(latlng) {
		  otariskylinetrack.setOptions({strokeColor: 'blue'});
		  });
 
		
      }
	  
      
	  
	  

	  

     

      