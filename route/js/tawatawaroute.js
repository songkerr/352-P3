
	function initMap() {
		var myLatlng = {lat: -41.3323, lng: 174.7620}; //track coords

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

		//mt tawatawaloop track
    	var tawatawaloopCoordinates = [
			//start point
			{lat: -41.3354, lng: 174.7628},
			{lat: -41.3356, lng: 174.7621},
			{lat: -41.3353, lng: 174.7615},
			{lat: -41.3347, lng: 174.7612},
			{lat: -41.3346, lng: 174.7616},
			{lat: -41.3342, lng: 174.7622},
			{lat: -41.3339, lng: 174.7625},
			{lat: -41.3337, lng: 174.7622},
			{lat: -41.3327, lng: 174.7627},
			{lat: -41.3321, lng: 174.7627},
			{lat: -41.3323, lng: 174.7624},
			{lat: -41.3327, lng: 174.7623},
			{lat: -41.3326, lng: 174.7621},
			{lat: -41.3326, lng: 174.7620},
			{lat: -41.3328, lng: 174.7616},
			{lat: -41.3329, lng: 174.7615},
			{lat: -41.3329, lng: 174.7614},
			{lat: -41.3328, lng: 174.7614},
			{lat: -41.3325, lng: 174.7619},
			{lat: -41.3323, lng: 174.7620},
			{lat: -41.3319, lng: 174.7623},
			{lat: -41.3320, lng: 174.7620},
			{lat: -41.3323, lng: 174.7619},
			{lat: -41.3323, lng: 174.7617},
			{lat: -41.3317, lng: 174.7621},
			{lat: -41.3316, lng: 174.7624},
			{lat: -41.3316, lng: 174.7627},
			{lat: -41.3318, lng: 174.7628},
			{lat: -41.3313, lng: 174.7629},
			{lat: -41.3309, lng: 174.7627},
			{lat: -41.3301, lng: 174.7627},
			{lat: -41.3297, lng: 174.7636},
			{lat: -41.3300, lng: 174.7643},
			{lat: -41.3308, lng: 174.7644},
			{lat: -41.3308, lng: 174.7647},
			{lat: -41.3311, lng: 174.7649},
			{lat: -41.3314, lng: 174.7648},
			{lat: -41.3316, lng: 174.7663},
			{lat: -41.3321, lng: 174.7662},
			{lat: -41.3321, lng: 174.7659},
		
			{lat: -41.3304, lng: 174.7635},
			{lat: -41.3306, lng: 174.7631},
			{lat: -41.3315, lng: 174.7633},
			{lat: -41.3318, lng: 174.7628},

			{lat: -41.3321, lng: 174.7627},
			{lat: -41.3327, lng: 174.7627},
			{lat: -41.3337, lng: 174.7622},
			{lat: -41.3339, lng: 174.7625},
			{lat: -41.3342, lng: 174.7622},
			{lat: -41.3346, lng: 174.7616},
			{lat: -41.3347, lng: 174.7612},
			{lat: -41.3353, lng: 174.7615},
			{lat: -41.3356, lng: 174.7621},
			{lat: -41.3354, lng: 174.7628}
    	];
		
 
		  var tawatawalooptrack = new google.maps.Polygon({
		    path: tawatawaloopCoordinates,
		    geodesic: true,
		    strokeColor: 'green',
			fillColor:'green',
		    strokeOpacity: .75,
			strokeWeight: 5
		  });
		  

		  tawatawalooptrack.setMap(map);
		  
		  google.maps.event.addListener(tawatawalooptrack,  'mouseover', function(latlng) {
		  tawatawalooptrack.setOptions({strokeColor: 'white'});			 
		  });

		  google.maps.event.addListener(tawatawalooptrack, 'mouseout', function(latlng) {
		  tawatawalooptrack.setOptions({strokeColor: 'green'});
		  });
	
      }
	  
      
	  
	  

	  

     

      