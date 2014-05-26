
google.maps.event.addDomListener(window, 'load', initialize);

var locations = [
  ['Dev Boot Camp', 37.784633, -122.397414],
  ['China Town', 37.794138, -122.407791],
  ['Ferry Building', 37.795923, -122.392052],
  ['Golden Gate Bridge', 37.819877, -122.478939],
  ['Presidio', 37.798874, -122.466194]
];

var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

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
    });

    (function(marker,i){
      google.maps.event.addListener(marker, 'click', function(){
        marker.info = new google.maps.InfoWindow({
          content: contentString
           });
        marker.info.open(map,marker)
      });
    })(marker, i);
  }
}





