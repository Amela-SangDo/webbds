$(function() {
  $('.haslink').on('click', function(e) {
    e.preventDefault()
    if ($(this).find('.arrow-down').length > 0) {
      $(this).parent().toggleClass('active')
    }
  })
  $('.dd-item span, .sub-item span').click(function() {
    $('.dd-item span, .sub-item span').removeClass('actived')
    const parent = $(this).parents('.nav-dropdown')
    const df = parent.find('.nav-dropdown__default')
    $(this).addClass('actived')
    let txt = ''
    if ($(this).attr('data-option') == 0) {
      df.removeClass('hasTxt')
      txt = 'Tất cả'
    } else {
      txt = $(this).text()
      df.addClass('hasTxt')
    }
    df.text(txt)
    parent.find('[type="checkbox"]').prop('checked', false)
  })
})
function openNav() {
  document.getElementById("mySidenav").style.width = "270px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});

$(function() {
  const now = new Date(); 
  const nextMonth = new Date().setDate(now.getDate() + 30);
  console.log(nextMonth)
  $('#datePicker').val(now.toDateInputValue());
  $('#datePicker2').val(new Date(nextMonth).toDateInputValue());
})
