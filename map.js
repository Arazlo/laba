let map;

function initMap() {
  Mymap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 55.486061595947916, lng: 28.78676901377795},
    zoom: 13,
  });

var Myicon = {
    url: "https://i.pinimg.com/originals/4a/a5/34/4aa534605d1afc465c5bdc5dd80f1ecb.png",
    scaledSize: new google.maps.Size(30, 30),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0) 
};

var marker = new google.maps.Marker({
    position: {lat: 55.486061595947916, lng: 28.78676901377795},
    map: Mymap,
    icon: Myicon,
    title: "Hey there!"
});
var info = new google.maps.InfoWindow({
    content: '<h3>Its our location</h3><p>We are working for 24/7</p>'
});
var info2 = new google.maps.InfoWindow({
  content: '<h3>Its our location</h3><p>We are working for 24/7</p>'
});
var info3 = new google.maps.InfoWindow({
  content: '<h3>Its our location</h3><p>We are working for 24/7</p>'
});
var marker2 = new google.maps.Marker({
  position: {lat: 55.496214721008315, lng: 28.753616064527517},
  map: Mymap,
  icon: Myicon,
  title: "Hey there!"
});
var marker3 = new google.maps.Marker({
  position: {lat: 55.478598292503314, lng: 28.777219503855292},
  map: Mymap,
  icon: Myicon, 
  title: "Hey there!"
});

marker.addListener("click", function(){
    info.open(Mymap, marker,); 
});
marker2.addListener("click", function(){
  info2.open(Mymap, marker2); 
});
marker3.addListener("click", function(){
  info3.open(Mymap, marker3); 
});
if(properties.info){
  var info = new google.maps.InfoWindow({
    content: '<h3>Its our location</h3><p>We are working for 24/7</p>'
  })
}
}
