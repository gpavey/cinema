
$(document).ready(function(){
  var mapCenter = new google.maps.LatLng(37.7833, -122.4167);
  var map;
  var markers = [];
  var markerCluster;
  map_initialize();
  $('.add_movies').on('click', addMarkers)
  $('.add_movies').trigger('click')
  var oms = new OverlappingMarkerSpiderfier(map, {markersWontMove: true,keepSpiderfied: true});
  pickDate();
  $('.limit_date').on('click', clearOverlays)

  function map_initialize() {
    var mapOptions = {
      center: mapCenter,
      zoom: 13,
      overviewMapControl: true,
    };
    map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
  };  //end map_initialize

  function clearOverlays(e) {

    for (var i = 0; i < markers.length; i++ ) {
      markers[i].setMap(null);
    }
    markers.length = 0;
    markerCluster.clearMarkers();
    changeMap(e);
  }

  function changeMap(e) {
    e.preventDefault();
    newDate = $('#first_year').val();
    newDate.serializeArray;

    var requestAjax = $.ajax({
      url: '/movies',
      type: 'GET',
      data: {release_year: newDate}
      });
      requestAjax.done(getMarkerData);
      requestAjax.fail(showErrors);
  }

  function addMarkers(e) {
    e.preventDefault();
    var requestAjax = $.ajax({
      url: '/locations',
      type: 'GET',
      });
      requestAjax.done(getMarkerData);
      requestAjax.fail(showErrors);
  }

  function getMarkerData(data){
    setMarkers(map,data)
  }

  function showErrors(jqXHR, textStatus, errorThrown){
  alert('what the fuck? check for errors!')
  }


  function setMarkers(map,data){

    var infowindow = new google.maps.InfoWindow()
    for (var i in data){
      var site = data[i];
      var myLatLng = new google.maps.LatLng(site.lat,site.lng);
      var marker = new google.maps.Marker({
        map: map,
        draggable: false,
        animation: google.maps.Animation.DROP,
        position: myLatLng,
        title: site.title,
        content: '<div id="content">'+
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
                '</div>'
      });

      markers.push(marker);
      oms.addMarker(marker);

      google.maps.event.addListener(marker, 'click', function() {
        // infowindow.setPosition(0,0, true)
        infowindow.setContent(this.content);
        infowindow.open(map, this);
      });
    } // End i loop

    oms.addListener('spiderfy', function(markers) {infowindow.close();});
    var mcOptions = {gridSize: 30, maxZoom: 15};
   markerCluster = new MarkerClusterer(map, markers, mcOptions);
  } // End setMarkers

  function pickDate(){

    var myDate = new Date();
    var thisYear = myDate.getFullYear();
    for (var i=1914; i < thisYear; i++){
      $('#first_year').append('<option value ="'+i+'">'+i+'</option>')
      $('#last_year').append('<option value ="'+i+'">'+i+'</option>')
    };
  };


}); // End on load












