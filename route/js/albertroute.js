function initMap() {
		var myLatlng = {lat: -41.3208, lng: 174.7839}; //track coords

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

		//mt albert loop track
    	var mtalbertloopCoordinates = [
			//start point
			{lat: -41.3181, lng: 174.7894},
			{lat: -41.3180, lng: 174.7889},
			{lat: -41.3171, lng: 174.7878},
			
			{lat: -41.3184, lng: 174.7880},
			{lat: -41.3191, lng: 174.7884},
			{lat: -41.3190, lng: 174.7868},
			{lat: -41.3200, lng: 174.7843},
			{lat: -41.3213, lng: 174.7850},
			{lat: -41.3213, lng: 174.7837},
			{lat: -41.3208, lng: 174.7839},
			{lat: -41.3195, lng: 174.7838},
			{lat: -41.3193, lng: 174.7841},
			{lat: -41.3189, lng: 174.7861},
			{lat: -41.3186, lng: 174.7865},
			{lat: -41.3180, lng: 174.7871},
			{lat: -41.3168, lng: 174.7872},
			{lat: -41.3163, lng: 174.7882},
			
			
    	];
		
 
		  var mtalbertlooptrack = new google.maps.Polygon({
		    path: mtalbertloopCoordinates,
		    geodesic: true,
		    strokeColor: 'green',
			fillColor:'green',
		    strokeOpacity: .75,
			strokeWeight: 5
		  });
		  

		  mtalbertlooptrack.setMap(map);
		  
		  google.maps.event.addListener(mtalbertlooptrack,  'mouseover', function(latlng) {
		  mtalbertlooptrack.setOptions({strokeColor: 'white'});			 
		  });

		  google.maps.event.addListener(mtalbertlooptrack, 'mouseout', function(latlng) {
		  mtalbertlooptrack.setOptions({strokeColor: 'green'});
		  });
	
      }