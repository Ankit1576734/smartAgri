 

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat:37.120852 , lng: -121.062994},
  });
  
  setMarkers(map);
  }
  
  const beaches = [
  ["Bondi Beach", 37.122254, -122.062994, 4],
  ["Coogee Beach", -33.923036, 151.259052, 5],
  ["Cronulla Beach", -34.028249, 151.157507, 3],
  ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
  ["Maroubra Beach", 16.85194444, 74.57969444, 1],
  ];
  
  function setMarkers(map) { 
  const image = {
    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
  };

  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };
  
  for (let i = 0; i < beaches.length; i++) {
    const beach = beaches[i];
  
    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });
  }
  }
  
  window.initMap = initMap;