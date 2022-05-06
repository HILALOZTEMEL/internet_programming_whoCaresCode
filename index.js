function resimKoru(event) {
    var tname
    tname=event.srcElement.tagName
    if (event.button==2 && tname=="IMG"){pressed="picture"}
    if (pressed=="picture")
    {window.alert("Bu sitedeki resimleri kopyalamayınız!")}
    pressed=0
  }

    
 
  function imageReflesh(imageName)
  {
  document.getElementById(imageName).src='images/hilaloztemel2.jpg';
  var el=document.querySelector(".aboutme img"); 
  var x= getComputedStyle(el).getPropertyValue();
  }

  function imageRefleshtwo(imageName)
  {
  document.getElementById(imageName).src="images/hilaloztemel.JPG";
 
  }
  
  const myElement = document.getElementById("home");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      myElement.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    myElement.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }
