


      function initMap() {
        var myLatlng = {lat: -41.2544, lng: 174.7479};
		
        var map = new google.maps.Map(document.getElementById('routemap'), {
          zoom: 13.5,
		  center: myLatlng
        });
		
        var marker = new google.maps.Marker({
          position: myLatlng,
          // map: map,
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
		

		//skylinewalkway track
    	var skylineCoordinates = [
			//start point	
			{lat: -41.2822, lng: 174.7177},	
			{lat: -41.2814, lng: 174.7189},	
			{lat: -41.2813, lng: 174.7197},
			{lat: -41.2804, lng: 174.7199},	
			{lat: -41.2801, lng: 174.7204},	
			{lat: -41.2800, lng: 174.7218},	
			{lat: -41.2797, lng: 174.7222},	
			{lat: -41.2800, lng: 174.7230},	
			{lat: -41.2797, lng: 174.7238},	
			{lat: -41.2797, lng: 174.7243},	
			{lat: -41.2786, lng: 174.7261},
			{lat: -41.2780, lng: 174.7266},	
			{lat: -41.2777, lng: 174.7268},	
			{lat: -41.2772, lng: 174.7264},	
			{lat: -41.2772, lng: 174.7272},
			{lat: -41.2768, lng: 174.7275},	
			{lat: -41.2768, lng: 174.7280},	
			{lat: -41.2765, lng: 174.7280},	
			{lat: -41.2765, lng: 174.7283},	
			{lat: -41.2766, lng: 174.7284},	
			{lat: -41.2765, lng: 174.7289},	
			{lat: -41.2769, lng: 174.7293},
			{lat: -41.2767, lng: 174.7303},
			{lat: -41.2761, lng: 174.7310},	
			{lat: -41.2761, lng: 174.7314},	
			{lat: -41.2756, lng: 174.7319},	
			{lat: -41.2749, lng: 174.7321},	
			{lat: -41.2748, lng: 174.7327},
			{lat: -41.2745, lng: 174.7328},	
			
			{lat: -41.2736, lng: 174.7334},
			{lat: -41.2728, lng: 174.7347},
			{lat: -41.2727, lng: 174.7362},
			{lat: -41.2720, lng: 174.7366},
			{lat: -41.2719, lng: 174.7371},
			{lat: -41.2717, lng: 174.7374},
			{lat: -41.2718, lng: 174.7378},
			{lat: -41.2715, lng: 174.7381},
			{lat: -41.2716, lng: 174.7385},
			{lat: -41.2714, lng: 174.7388},
			{lat: -41.2707, lng: 174.7387},
			{lat: -41.2708, lng: 174.7392},
			{lat: -41.2701, lng: 174.7397},
			{lat: -41.2698, lng: 174.7396},
			{lat: -41.2696, lng: 174.7401},
			{lat: -41.2693, lng: 174.7403},
			{lat: -41.2688, lng: 174.7403},
			{lat: -41.2686, lng: 174.7406},
			{lat: -41.2680, lng: 174.7408},
			{lat: -41.2679, lng: 174.7411},
			{lat: -41.2681, lng: 174.7413},
			{lat: -41.2679, lng: 174.7418},
			{lat: -41.2682, lng: 174.7422},
			{lat: -41.2670, lng: 174.7432},
			{lat: -41.2664, lng: 174.7427},
			{lat: -41.2662, lng: 174.7434},
			{lat: -41.2657, lng: 174.7435},
			{lat: -41.2646, lng: 174.7432},
			{lat: -41.2645, lng: 174.7440},
			{lat: -41.2646, lng: 174.7444},
			{lat: -41.2645, lng: 174.7447},
			{lat: -41.2641, lng: 174.7444},
			{lat: -41.2637, lng: 174.7446},
			{lat: -41.2638, lng: 174.7454},
			{lat: -41.2632, lng: 174.7453},
			{lat: -41.2627, lng: 174.7463},
			{lat: -41.2622, lng: 174.7466},
			{lat: -41.2613, lng: 174.7467},
			{lat: -41.2610, lng: 174.7470},
			{lat: -41.2596, lng: 174.7469},
			{lat: -41.2587, lng: 174.7469},
			{lat: -41.2584, lng: 174.7468},
			{lat: -41.2582, lng: 174.7472},
			{lat: -41.2580, lng: 174.7471},
			{lat: -41.2577, lng: 174.7472},
			{lat: -41.2576, lng: 174.7476},
			{lat: -41.2573, lng: 174.7471},
			{lat: -41.2569, lng: 174.7463},
			{lat: -41.2568, lng: 174.7465},
			{lat: -41.2566, lng: 174.7463},
			{lat: -41.2564, lng: 174.7466},
			{lat: -41.2568, lng: 174.7472},
			{lat: -41.2561, lng: 174.7478},
			{lat: -41.2556, lng: 174.7479},
			{lat: -41.2553, lng: 174.7482},
			{lat: -41.2548, lng: 174.7481},
			{lat: -41.2546, lng: 174.7481},
			{lat: -41.2544, lng: 174.7479},
			{lat: -41.2540, lng: 174.7480},
			{lat: -41.2537, lng: 174.7476},
			{lat: -41.2533, lng: 174.7486},
			{lat: -41.2489, lng: 174.7485},
			{lat: -41.2485, lng: 174.7495},
			{lat: -41.2477, lng: 174.7495},
			{lat: -41.2476, lng: 174.7507},
			{lat: -41.2473, lng: 174.7510},
			{lat: -41.2468, lng: 174.7511},
			{lat: -41.2465, lng: 174.7514},
			{lat: -41.2460, lng: 174.7514},
			{lat: -41.2456, lng: 174.7514},
			{lat: -41.2452, lng: 174.7517},
			
			{lat: -41.2446, lng: 174.7515},
			{lat: -41.2444, lng: 174.7520},
			{lat: -41.2439, lng: 174.7523},
			{lat: -41.2442, lng: 174.7532},
			{lat: -41.2441, lng: 174.7536},
			{lat: -41.2438, lng: 174.7541},
			{lat: -41.2433, lng: 174.7559},
			{lat: -41.2430, lng: 174.7567},
			{lat: -41.2424, lng: 174.7574},
			{lat: -41.2424, lng: 174.7579},
			{lat: -41.2424, lng: 174.7584},
			{lat: -41.2420, lng: 174.7584},
			{lat: -41.2412, lng: 174.7588},
			{lat: -41.2404, lng: 174.7598},
			{lat: -41.2395, lng: 174.7601},
			{lat: -41.2392, lng: 174.7624},
			{lat: -41.2389, lng: 174.7635},
			{lat: -41.2382, lng: 174.7642},
			{lat: -41.2374, lng: 174.7651},
			{lat: -41.2373, lng: 174.7652},
			{lat: -41.2371, lng: 174.7657},
			{lat: -41.2366, lng: 174.7660},
			{lat: -41.2366, lng: 174.7662},
			{lat: -41.2369, lng: 174.7673},
			{lat: -41.2363, lng: 174.7683},
			{lat: -41.2363, lng: 174.7692},
			{lat: -41.2359, lng: 174.7697},
			{lat: -41.2353, lng: 174.7725},
			{lat: -41.2356, lng: 174.7732},
			{lat: -41.2355, lng: 174.7736},
			{lat: -41.2353, lng: 174.7755},
			{lat: -41.2343, lng: 174.7771},
			{lat: -41.2339, lng: 174.7783},
			{lat: -41.2340, lng: 174.7794},
			{lat: -41.2339, lng: 174.7798}
			//end point
    	];
		
 
		  var skylinetrack = new google.maps.Polyline({
		    path: skylineCoordinates,
		    geodesic: true,
		    strokeColor: 'blue',
			  fillColor: 'blue',
		    strokeOpacity: .75,
			strokeWeight: 5
		  });
		
		  skylinetrack.setMap(map);
		  
		  google.maps.event.addListener(skylinetrack,  'mouseover', function(latlng) {
		  skylinetrack.setOptions({strokeColor: 'white'});			 
		  });

		  google.maps.event.addListener(skylinetrack, 'mouseout', function(latlng) {
		  skylinetrack.setOptions({strokeColor: 'blue'});
		  });
 
		
      }
	  
      
	  
	  

	  

     

      