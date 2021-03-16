function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}


$(document).ready(function(){
  $('.your-class').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true
  });
})
	