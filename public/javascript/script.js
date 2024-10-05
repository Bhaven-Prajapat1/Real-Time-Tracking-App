// Initialise the socket io || it sent a connection req

const socket = io();

// what to do =>
// check if the browser supports geolocation.
// set options for high accuracy a 5 sec time out and no caching
// use watchpostion to track the user location continuosly
// emit the latitude and longitude via socket with send-location. Log any error to the console
// initialize a map centered at coordinates (0,0) with a zoom level of 15 using leaflet And add OpenStreetMap tiles to the map
// Create an empty object markers.

if (navigator.geolocation) {
  // means if user moves watch the position
  navigator.geolocation.watchPosition(
    (position) => {
      //destructuring and bringing out longitude and latitude
      const { latitude, longitude } = position.coords;
      // meaning now we can track user moving or not

      // emit from the frontend
      socket.emit("send-location", { latitude, longitude });
    },
    (error) => {
      // if something went wrong show the error
      console.error(error);
    },
    {
      enableHighAccuracy: true, // for high and better accuracy
      timeout: 5000, // wait for 5 second
      maximumAge: 0, // no need of casing
    }
  );
}

const map = L.map("map").setView([0, 0], 16); // asking for location

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "OpenStreetMap",
}).addTo(map);

const markers = {}; // creating empty markers

socket.on("recieve-location", (data) => {
  const { id, latitude, longitude } = data;
  map.setView([latitude, longitude]);
  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude,longitude]).addTo(map);
  }
});

socket.on("User-disconnected", (id)=>{
  if(markers[id]){
    map.removeLayer(markers[id]);
    delete markers[id];
  }
})
