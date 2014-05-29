
$(document).ready(function(){
  var mapCenter = new google.maps.LatLng(37.7833, -122.4167);
  var map;
  map_initialize();


  function map_initialize() {
    var mapOptions = {
      center: mapCenter,
      zoom: 13,
      overviewMapControl: true,
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
  };  //end document ready

  $('.add_movies').on('click', addMarkers)
  $('.add_movies').trigger('click')

  var oms = new OverlappingMarkerSpiderfier(map, {markersWontMove: true,keepSpiderfied: true});

  function addMarkers(e) {
  e.preventDefault();
  var requestAjax = $.ajax({
    url: '/locations',
    type: 'GET'
    });
    requestAjax.done(getMarkerData);
    requestAjax.fail(showErrors);
  }

  function getMarkerData(locations){
    setMarkers(map,locations)
  }

  function showErrors(jqXHR, textStatus, errorThrown){
  alert('what the fuck? check for errors!')
  }

  function infoCallback(infowindow, marker) {
    return function() {
    infowindow.open(map,this);
    };
  };

  function setMarkers(map,locations){
    var markers = [];
    for (var i = 0; i < locations.length; i++){
      var site = locations[i];
      var myLatLng = new google.maps.LatLng(site.lat,site.lng);

      var marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: myLatLng,
        title: site.title,
      });

      markers.push(marker);
      oms.addMarker(marker);

      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
        '<h1 id=firstHeading" class="firstHeading">'+site.title+'</h1>'+
        '<div id="bodyContent">'+
          '<p><b>Year: </b>'+site.release_year+'</p>'+
          '<p><b>Locaton: </b>'+site.location+'</p>'+
          '<p><b>Director: </b>'+site.director+'</p>'+
          '<p><b>Writer: </b>'+site.writer+'</p>'+
          '<p><b>Lead Actors: </b>'+site.actor1+', '+site.actor2+', '+site.actor3+'</p>'+
          '<p><b>Fun Fact: </b>'+site.fun_fact+'</p>'+
          '<p><a href="http://www.imdb.com/find?s=tt&q='+site.title+'">'+
            'http://www.imdb.com/find?s=tt&q='+site.title+'</a>' +
            '</p>'+
        '</div>'+
      '</div>';

      var infowindow = new google.maps.InfoWindow();
      infowindow.setContent(contentString);
      google.maps.event.addListener(marker,'click',infoCallback(infowindow, marker));

    } // End i loop
    oms.addListener('spiderfy', function(markers) {infowindow.close();});
      var mcOptions = {gridSize: 30, maxZoom: 15};
      var markerCluster = new MarkerClusterer(map, markers, mcOptions);
  } // End setMarkers
}); // End on load











// google.maps.event.addDomListener(window, 'load', initialize);
$(document).ready(function(){
  var mapCenter = new google.maps.LatLng(37.7833, -122.4167);
  var map;
  map_initialize();
  function map_initialize() {
    var mapOptions = {
      center: mapCenter,
      zoom: 13
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
  };  //end document ready
    $('.add_movies').on('click', addMarkers)

    // var oms = new OverlappingMarkerSpiderfier(map);

  function addMarkers(e) {
  e.preventDefault();
  var requestAjax = $.ajax({
    url: '/locations',
    type: 'GET'
    });
    requestAjax.done(getMarkerData);
    requestAjax.fail(showErrors);
  }

  function getMarkerData(locations){
    setMarkers(map,locations)
  }

  function showErrors(jqXHR, textStatus, errorThrown){
  alert('what the fuck? check for errors!')
  }

  function infoCallback(infowindow, marker) {
    return function() {
    infowindow.open(map, marker);
    };
  };

  function setMarkers(map,locations){
    var markers = [];
    var infowindows = [];
    for (var i = 0; i < locations.length; i++){
      var site = locations[i];
      var myLatLng = new google.maps.LatLng(site.lat,site.lng);

      var marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: myLatLng,
        title: site.title,
      });

      markers.push(marker);

      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
        '<h1 id=firstHeading" class="firstHeading">'+site.title+'</h1>'+
        '<div id="bodyContent">'+
          '<p><b>Year: </b>'+site.release_year+'</p>'+
          '<p><b>Locaton: </b>'+site.location+'</p>'+
          '<p><b>Director: </b>'+site.director+'</p>'+
          '<p><b>Writer: </b>'+site.writer+'</p>'+
          '<p><b>Lead Actors, </b>'+site.actor1+', '+site.actor2+', '+site.actor3+'</p>'+
          '<p><b>Fun Fact: </b>'+site.fun_fact+'</p>'+
        '</div>'+
      '</div>';

      var infowindow = new google.maps.InfoWindow();
          infowindow.setContent(contentString);
          google.maps.event.addListener(
            marker,
            'click',
            infoCallback(infowindow, marker)
          );

    } // End i loop
      var mcOptions = {gridSize: 30, maxZoom: 15};
      var markerCluster = new MarkerClusterer(map, markers, mcOptions);
  } // End setMarkers

}); // End on load










// google.maps.event.addDomListener(window, 'load', initialize);
$(document).ready(function(){
  var mapCenter = new google.maps.LatLng(37.7833, -122.4167);
  var map;
  map_initialize();
  function map_initialize() {
    var mapOptions = {
      center: mapCenter,
      zoom: 13
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
  };  //end document ready
    $('.add_movies').on('click', addMarkers)

    // var oms = new OverlappingMarkerSpiderfier(map);

  function addMarkers(e) {
  e.preventDefault();
  var requestAjax = $.ajax({
    url: '/locations',
    type: 'GET'
    });
    requestAjax.done(getMarkerData);
    requestAjax.fail(showErrors);
  }

  function getMarkerData(locations){
    setMarkers(map,locations)
  }

  function showErrors(jqXHR, textStatus, errorThrown){
  alert('what the fuck? check for errors!')
  }

  function infoCallback(infowindow, marker) {
    return function() {
    infowindow.open(map, marker);
    };
  };

  function setMarkers(map,locations){
    var markers = [];
    var infowindows = [];
    for (var i = 0; i < locations.length; i++){
      var site = locations[i];
      var myLatLng = new google.maps.LatLng(site.lat,site.lng);

      var marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: myLatLng,
        title: site.title,
      });

      markers.push(marker);

      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
        '<h1 id=firstHeading" class="firstHeading">'+site.title+'</h1>'+
        '<div id="bodyContent">'+
          '<p><b>Year: </b>'+site.release_year+'</p>'+
          '<p><b>Locaton: </b>'+site.location+'</p>'+
          '<p><b>Director: </b>'+site.director+'</p>'+
          '<p><b>Writer: </b>'+site.writer+'</p>'+
          '<p><b>Lead Actors, </b>'+site.actor1+', '+site.actor2+', '+site.actor3+'</p>'+
          '<p><b>Fun Fact: </b>'+site.fun_fact+'</p>'+
        '</div>'+
      '</div>';

      var infowindow = new google.maps.InfoWindow();
          infowindow.setContent(contentString);
          google.maps.event.addListener(
            marker,
            'click',
            infoCallback(infowindow, marker)
          );

    } // End i loop
      var mcOptions = {gridSize: 30, maxZoom: 15};
      var markerCluster = new MarkerClusterer(map, markers, mcOptions);
  } // End setMarkers

}); // End on load









