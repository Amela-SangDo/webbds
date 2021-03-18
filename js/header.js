$(function() {
  $('.haslink').on('click', function(e) {
    e.preventDefault()
    if ($(this).find('.arrow-down').length > 0) {
      $(this).parent().toggleClass('active')
    }
  })
})
function openNav() {
  document.getElementById("mySidenav").style.width = "270px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}
