var mapObj = new GMaps({
      el: '#map',
  lat: 19.319061,
  lng: -99.084187,
    });

var m = mapObj.addMarker({
  lat: 19.319061,
  lng: -99.084187,
  title: 'Muebles Generacion S.A. de C.V.',
  infoWindow: {
    content: '<h4>Muebles Generación S.A. de C.V.</div>',
    maxWidth: 200
}
});