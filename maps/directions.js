<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<style type="text/css">
  
* {
  box-sizing: border-box;
}
.menu {
  float: left;
  width: 20%;
}
.menuitem {
  padding: 8px;
  margin-top: 7px;
  border-bottom: 1px solid #f1f1f1;
}
.main {
  float: left;
  width: 60%;
  padding: 0 20px;
  overflow: hidden;
}
.right {
  background-color: #fdc432;
  float: center;
  width: 100%;
  padding: 10px 15px;
  margin-top: 7px;
}

@media only screen and (max-width:800px) {
  /* For tablets: */
  .main {
    width: 80%;
    padding: 0;
  }
  .right {
    width: 100%;
  }
}
@media only screen and (max-width:500px) {
  /* For mobile phones: */
  .menu, .main, .right {
    width: 100%;
  }
}


header, footer {
    padding: 1em;
    color: white;
    background-color: black;
    clear: left;
    text-align: center;
}

    #map {
        height: 100%;
        width: 100%;
        margin: auto;
        margin: auto;
      }

         html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
</style>
 <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAialOco_QZ9EpqMxzYqqkkpQDza4ENv-Y&callback=initMap"
    ></script>
<script type="text/javascript">

var map;
var infowindow;


</script>


<body>


  <script>


      // New map
      var map = null;
      var bounds = null;

      var directionsService = null;
      var directionsDisplay = null;

      // Add Marker Function
      function addMarker(map, props){
        var marker = new google.maps.Marker({
          position:props.coords,
          map:map
          //icon:props.iconImage
        });

        // Check for customicon
        if(props.iconImage){
          // Set icon image
          marker.setIcon(props.iconImage);
        }

        // Check content
        if(props.content){
          var infoWindow = new google.maps.InfoWindow({
            content:props.content
          });

          marker.addListener('click', function(){
            toMarker(props);
          });
        }
      }


    function toMarker(props)
    {
      console.log(props);
      latLng = new google.maps.LatLng(-41.295548,174.775604);

      dest = new google.maps.LatLng(props.coords.lat, props.coords.lng);

      directionsService.route({
          origin: latLng,
          destination: dest,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });

      //calculateAndDisplayRoute(directionsService, directionsDisplay);
    }

    function initMap()
    {
      // Map options
      directionsService = new google.maps.DirectionsService;
      directionsDisplay = new google.maps.DirectionsRenderer;
      var options = {
        zoom:12,
        center:{lat:-41.286460,lng:174.776236}
      }


       map = new google.maps.Map(document.getElementById('map'), options);
      bounds = new google.maps.LatLngBounds();

             directionsDisplay.setMap(map);

      // Listen for click on map
      google.maps.event.addListener(map, 'click', function(event){
        // Add marker
        addMarker({coords:event.latLng});
      });

      // Array of markers
      var markers = [
//        {
//          coords:{lat:-41.304244,lng:174.801104},
//         
//          content:'<h1>Cog Park</h1>'
//        },
//        {
//          coords:{lat:-41.309524,lng:174.762477},
//          content:'<h1>Ohiro Park</h1>'
//        },
//        {
//          coords:{lat:-41.296155,lng:174.790085},
//          content:'<h1>Charles Plimmer Park</h1>'
//        },
//          
//           {
//          coords:{lat:-41.3073464,lng:174.7902953},
//          content:'<h1>Charles Plimmer Park</h1>'
//        },
//          
//             {
//          coords:{lat:-41.325158,lng:174.7831193},
//          content:'<h1>Charles Plimmer Park</h1>'
//        },

            {
          coords:{lat:-41.293783,lng:174.761291},
          content:'<h1>Polhill Reserve Loop</h1>'
        },
      ];

      // Loop through markers
      for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(map,markers[i]);
  bounds.extend(markers[i].coords);

      }

      map.fitBounds(bounds);
    }
  


//--------------------------------------------------------------



//mylocation 

function findMyCurrentLocation() {
  var geoService = navigator.geolocation;
  if (geoService) {
    geoService.getCurrentPosition(showCurrentLocation,errorHandler,{enableHighAccuracy: true});
  } else {
    alert("Your Browser does not support GeoLocation.");
  }
}



function showCurrentLocation(position){
  //Convert position -> Lat/Lon object
  var latLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

 //latLng = new google.maps.LatLng();

  //Google Map options
  /*var myOptions = {
          zoom: 15,
          center: latLng,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

    //Create the Google Map
  var map = new google.maps.Map(document.getElementById("map"), myOptions);
*/
    //Plot where the user is via a Marker
  /*var usermarker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    title: "You are here!"
                    });
                    */


  var usermarker = { //-41.3057336,174.7999832
          coords:latLng,
         // iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          content:'<h1>You are here</h1>'
        };


  /*map.setCenter(latLng);
  usermarker.setPosition(latLng);*/

  addMarker(map, usermarker);

  bounds.extend(usermarker.coords);

  map.fitBounds(bounds);
}

function errorHandler(error){
    alert("Error while retrieving current position. Error code: " + error.code + ",Message: " + error.message);
}


//------direction service 
var onChangeHandler = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);
        };
        document.getElementById('start').addEventListener('change', onChangeHandler);
        document.getElementById('end').addEventListener('change', onChangeHandler);
      

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          origin: document.getElementById('start').value,
          destination: document.getElementById('end').value,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

</script>
</div>
</div>
</script>
</head>
<body onload="findMyCurrentLocation()">

    <div id="map"></div>
  


  <br>

</div>

</body>
<footer>MDDN352 Kristina Huang</footer>

</html>


