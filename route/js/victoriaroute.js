
function initMap() {
	var myLatlng = {lat: -41.3056, lng: 174.7877}; //track coords

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
     
		

		//mt vic loop track
    	var mtvicloopCoordinates = [
			//start point
			{lat: -41.2959, lng: 174.7900},
			{lat: -41.2960, lng: 174.7908},
			{lat: -41.2958, lng: 174.7911},
			{lat: -41.2958, lng: 174.7913},
			{lat: -41.2966, lng: 174.7916},		
			{lat: -41.2987, lng: 174.7920},
			{lat: -41.3001, lng: 174.7909},
			{lat: -41.3014, lng: 174.7896},
			
			{lat: -41.3023, lng: 174.7896},
			{lat: -41.3028, lng: 174.7888},
			{lat: -41.3049, lng: 174.7900},
			{lat: -41.3050, lng: 174.7894},
			{lat: -41.3052, lng: 174.7889},
			{lat: -41.3059, lng: 174.7887},
			{lat: -41.3064, lng: 174.7893},
			{lat: -41.3068, lng: 174.7895},
			{lat: -41.3070, lng: 174.7890},
			{lat: -41.3075, lng: 174.7892},
			{lat: -41.3077, lng: 174.7895},
			{lat: -41.3086, lng: 174.7894},
			{lat: -41.3092, lng: 174.7883},
			{lat: -41.3093, lng: 174.7885},
			{lat: -41.3099, lng: 174.7877},
			{lat: -41.3108, lng: 174.7882},
			{lat: -41.3111, lng: 174.7872},
			{lat: -41.3092, lng: 174.7872},
			{lat: -41.3069, lng: 174.7881},
			
	
			{lat: -41.3070, lng: 174.7881},
			{lat: -41.3056, lng: 174.7887},
			{lat: -41.3048, lng: 174.7882},
			{lat: -41.3045, lng: 174.7877},
			{lat: -41.3033, lng: 174.7884},
			{lat: -41.3033, lng: 174.7887},
			{lat: -41.3031, lng: 174.7887},
			{lat: -41.3009, lng: 174.7887},
			{lat: -41.2994, lng: 174.7888},
			{lat: -41.2988, lng: 174.7898},
			{lat: -41.2974, lng: 174.7905},
    	];
		
 
		  var mtviclooptrack = new google.maps.Polygon({
		    path: mtvicloopCoordinates,
		    geodesic: true,
		    strokeColor: 'blue',
			fillColor:'blue',
		    strokeOpacity: .75,
			strokeWeight: 5
		  });
		  

		  mtviclooptrack.setMap(map);
		  
		  google.maps.event.addListener(mtviclooptrack,  'mouseover', function(latlng) {
		  mtviclooptrack.setOptions({strokeColor: 'white'});			 
		  });

		  google.maps.event.addListener(mtviclooptrack, 'mouseout', function(latlng) {
		  mtviclooptrack.setOptions({strokeColor: 'blue'});
		  });
	
      }
	  
      
	  
	  

	  

     

      