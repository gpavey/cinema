var marker
var map


function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(37.7833, -122.4167),
          zoom: 13
        };
        map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        marker = new google.maps.Marker({
          map:map,
          draggable:true,
          animation: google.maps.Animation.DROP,
          position: parliament
        });

  google.maps.event.addListener(marker, 'click', toggleBounce);
}


google.maps.event.addDomListener(window, 'load', initialize);