


      function initMap() {
        var myLatlng = {lat: -41.2698, lng: 174.7495};
		
        var map = new google.maps.Map(document.getElementById('routemap'), {
          zoom: 13,
		  center: myLatlng
        });
		
        var marker = new google.maps.Marker({
          position: myLatlng,
          // map: map,//hides marker as it is currently located at track to help map center pan to track
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

 
		//sanctury to sea
    	var sancturytoseaCoordinates = [
			//start point 
		    {lat: -41.2580, lng: 174.7821},
		    {lat: -41.2586, lng: 174.7815},
  		    {lat: -41.2579, lng: 174.7799},
  		    {lat: -41.2574, lng: 174.7788},
  		    {lat: -41.2570, lng: 174.7788},
  		    {lat: -41.2567, lng: 174.7783},
  		    {lat: -41.2565, lng: 174.7770},
  		    {lat: -41.2568, lng: 174.7761},
  		    {lat: -41.2571, lng: 174.7759},
  		    {lat: -41.2573, lng: 174.7755},
  		    {lat: -41.2582, lng: 174.7754},
 			{lat: -41.2582, lng: 174.7743},
  		    {lat: -41.2576, lng: 174.7732},
 			{lat: -41.2577, lng: 174.7725},
  		    {lat: -41.2580, lng: 174.7722},
 			{lat: -41.2582, lng: 174.7717},
  		    {lat: -41.2590, lng: 174.7711},
  		    {lat: -41.2598, lng: 174.7714},
  		    {lat: -41.2590, lng: 174.7711},//fork in the road

  		    {lat: -41.2598, lng: 174.7703},
  		    {lat: -41.2591, lng: 174.7690},
  		    {lat: -41.2584, lng: 174.7689},
  		    {lat: -41.2582, lng: 174.7691},
  		    {lat: -41.2580, lng: 174.7683},
  		    {lat: -41.2575, lng: 174.7681},
  		    {lat: -41.2574, lng: 174.7677},
  		    {lat: -41.2572, lng: 174.7676},
  		    {lat: -41.2571, lng: 174.7678},
  		    {lat: -41.2569, lng: 174.7676},
  		    {lat: -41.2568, lng: 174.7671},
  		    {lat: -41.2561, lng: 174.7673},
     		{lat: -41.2560, lng: 174.7671},
     		{lat: -41.2558, lng: 174.7672},
   			{lat: -41.2560, lng: 174.7669},

			{lat: -41.2545, lng: 174.7685},
			{lat: -41.2520, lng: 174.7721},
			{lat: -41.2507, lng: 174.7724},
			{lat: -41.2502, lng: 174.7733},
			{lat: -41.2491, lng: 174.7736},
			{lat: -41.2484, lng: 174.7732},
			{lat: -41.2479, lng: 174.7733},
			{lat: -41.2466, lng: 174.7735},
			{lat: -41.2455, lng: 174.7733},
			{lat: -41.2442, lng: 174.7719},
			{lat: -41.2433, lng: 174.7686},
			{lat: -41.2432, lng: 174.7675},
			{lat: -41.2420, lng: 174.7667},
			//
			{lat: -41.2432, lng: 174.7675},
			{lat: -41.2433, lng: 174.7686},
			{lat: -41.2442, lng: 174.7719},
			{lat: -41.2455, lng: 174.7733},
			{lat: -41.2466, lng: 174.7735},
			{lat: -41.2479, lng: 174.7733},
			{lat: -41.2484, lng: 174.7732},
			{lat: -41.2491, lng: 174.7736},
			{lat: -41.2502, lng: 174.7733},
			{lat: -41.2507, lng: 174.7724},
			{lat: -41.2520, lng: 174.7721},
			{lat: -41.2545, lng: 174.7685},
			
			
  		    {lat: -41.2546, lng: 174.7675},
  		    {lat: -41.2545, lng: 174.7664},
  		    {lat: -41.2547, lng: 174.7661},
  		    {lat: -41.2561, lng: 174.7653},
  		    {lat: -41.2579, lng: 174.7655},
  		    {lat: -41.2593, lng: 174.7666},
  		    {lat: -41.2605, lng: 174.7654},
  		    {lat: -41.2608, lng: 174.7645},
  		    {lat: -41.2618, lng: 174.7638},
  		    {lat: -41.2625, lng: 174.7633},
  		    {lat: -41.2633, lng: 174.7625},
  		    {lat: -41.2634, lng: 174.7623},
  		    {lat: -41.2640, lng: 174.7617},
  		    {lat: -41.2641, lng: 174.7617},
  		    {lat: -41.2644, lng: 174.7611},
  		    {lat: -41.2641, lng: 174.7609},
  		    {lat: -41.2646, lng: 174.7595},
  		    {lat: -41.2654, lng: 174.7586},
  		    {lat: -41.2658, lng: 174.7583},
  		    {lat: -41.2659, lng: 174.7578},
  		    {lat: -41.2659, lng: 174.7573},
  		    {lat: -41.2665, lng: 174.7560},
  		    {lat: -41.2663, lng: 174.7556},
  		    {lat: -41.2671, lng: 174.7552},
  		    {lat: -41.2675, lng: 174.7540},
  		    {lat: -41.2686, lng: 174.7539},
  		    {lat: -41.2691, lng: 174.7528},
  		    {lat: -41.2696, lng: 174.7527},
  		    {lat: -41.2717, lng: 174.7526},
  		    {lat: -41.2720, lng: 174.7529},
  		    {lat: -41.2722, lng: 174.7531},
  		    {lat: -41.2728, lng: 174.7525},
  		    {lat: -41.2731, lng: 174.7527},
  		    {lat: -41.2765, lng: 174.7524},
  		    {lat: -41.2787, lng: 174.7534},
  		    {lat: -41.2792, lng: 174.7531},
  		    {lat: -41.2794, lng: 174.7523},
  		    {lat: -41.2799, lng: 174.7529},
			{lat: -41.2826, lng: 174.7533},
			{lat: -41.2830, lng: 174.7532},
			{lat: -41.2834, lng: 174.7535},
			{lat: -41.2845, lng: 174.7534},
			{lat: -41.2852, lng: 174.7544},
			{lat: -41.2872, lng: 174.7546},
			{lat: -41.2883, lng: 174.7536},
			{lat: -41.2887, lng: 174.7537},
			
			{lat: -41.2906, lng: 174.7529},
			{lat: -41.2914, lng: 174.7528},
			{lat: -41.2924, lng: 174.7522},
			{lat: -41.2929, lng: 174.7520},
			{lat: -41.2931, lng: 174.7517},
			{lat: -41.2936, lng: 174.7515},
			{lat: -41.2938, lng: 174.7511},
			{lat: -41.2943, lng: 174.7509},
			{lat: -41.2958, lng: 174.7482},
			{lat: -41.2979, lng: 174.7445},//fork
			{lat: -41.2983, lng: 174.7428},
			{lat: -41.2976, lng: 174.7424},
			{lat: -41.2977, lng: 174.7430},
			{lat: -41.2977, lng: 174.7433},
			{lat: -41.2975, lng: 174.7435},
			{lat: -41.2972, lng: 174.7440},
			{lat: -41.2974, lng: 174.7445},
			{lat: -41.2979, lng: 174.7445},//fork
			
			{lat: -41.2983, lng: 174.7456},
			{lat: -41.2996, lng: 174.7457},
			{lat: -41.2999, lng: 174.7446},
			{lat: -41.3003, lng: 174.7433},
			{lat: -41.3013, lng: 174.7427},
			{lat: -41.3020, lng: 174.7416},
			{lat: -41.3015, lng: 174.7412},
			{lat: -41.3026, lng: 174.7408},
			{lat: -41.3036, lng: 174.7404},
			{lat: -41.3034, lng: 174.7398},
			{lat: -41.3004, lng: 174.7421},
			{lat: -41.3000, lng: 174.7417},
			{lat: -41.3003, lng: 174.7405}		
    	];
		
		
		  
	  var sancturytoseatrack = new google.maps.Polyline({
	    path: sancturytoseaCoordinates,
	    geodesic: true,
	    strokeColor: 'orange',
	    strokeOpacity: .75,
		strokeWeight: 5
	  });

		 sancturytoseatrack.setMap(map);
		 

		  google.maps.event.addListener(sancturytoseatrack,  'mouseover', function(latlng) {
		     sancturytoseatrack.setOptions({strokeColor: 'white'});		 
		  });

		  google.maps.event.addListener(sancturytoseatrack, 'mouseout', function(latlng) {
		      sancturytoseatrack.setOptions({strokeColor: 'orange'});
		  });
		  
      }
	  
      
	  
