function blink() {
  if(body.style.visibility === 'hidden') {
    body.style.visibility = 'visible';
  }
  else {
    body.style.visibility = 'hidden';
  }
}
window.setInterval(blink, 500);
navigator.geolocation.getCurrentPosition(function(position) {
  document.write(position.coords.latitude + ', ' + position.coords.longitude)
})
function a() {
  document.getElementByClassName("e").style.display = 'none'
}
