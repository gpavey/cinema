
google.maps.event.addDomListener(window, 'load', initialize);

var locations = [
  ['Dev Boot Camp', 37.784633, -122.397414, 4],
  ['China Town', 37.794138, -122.407791, 5],
  ['Ferry Building', 37.795923, -122.392052, 3],
  ['Golden Gate Bridge', 37.819877, -122.478939, 2],
  ['Presidio', 37.798874, -122.466194, 1]
];

function initialize() {
  // map options
  var mapOptions = {
    center: new google.maps.LatLng(37.7833, -122.4167),
    zoom: 13
  };

  // initialize map
  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
  // set markers
  setMarkers(map,locations);
}

function setMarkers(map,local){
  debugger;
  // set multiple marker
  for (var i = 0; i < local.length; i++){
    // initialize markers
    var site = local[i];
    var myLatLng = new google.maps.LatLng(site[1],site[2]);
    var marker = new google.maps.Marker({
      map: map,
      draggable: false,
      animation: google.maps.Animation.DROP,
      position: myLatLng,
      title: site[0],
      zIndex: site[3]
    });
    google.maps.event.addListener(marker, 'click', toggleBounce);
  }
}

function toggleBounce() {
  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


