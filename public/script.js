function iniciarMap() {
    var e = document.getElementById("inputCountry");
  var strUser = e.options[e.selectedIndex].value;
  var coord; 
  if(strUser ==="1"){
    coord= {lat:4.570868  ,lng:-74.297333};
  }else if (strUser ==="2"){
    coord = {lat:37.09024  ,lng:-95.712891};
  }else {
    coord = {lat:56.130366  ,lng:-106.3467713};
  }
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 5,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
  }
  