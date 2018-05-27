      function initMap() {
        var myLatlng = {lat: -41.2698, lng: 174.7495};
		
        var map = new google.maps.Map(document.getElementById('map'), {
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

		var redtrackCoordinates = [
		    {lat: -41.2725, lng: 174.7500},
		    {lat: -41.2700, lng: 174.7490},
			{lat: -41.2700, lng: 174.7490},
			{lat: -41.2698, lng: 174.7495},
			{lat: -41.2690, lng: 174.7480},
			{lat: -41.2680, lng: 174.7480},
		    {lat: -41.2670, lng: 174.7500},
			{lat: -41.2672, lng: 174.7512},
		    {lat: -41.2650, lng: 174.7505}
		  ];
		
		  var redtrack = new google.maps.Polyline({
		    path: redtrackCoordinates,
		    geodesic: true,
		    strokeColor: '#FF0000',
		    strokeOpacity: .75,
			strokeWeight: 5
		  });

		  redtrack.setMap(map);
		   
		  redtrack.addListener('click', function myFunction() {
	      		var x = document.getElementById("myDIV");
	      		if (x.style.display === "block") {
	          	  	x.style.display = "none";
	      		}
				else {
	          x.style.display = "block";
			  
	      	}
			
			map.setZoom(16);
		 
	  	  });

      }