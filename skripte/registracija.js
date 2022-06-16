$(function() {
  $('#imeprezime1').on('blur', function(e) {
    var provera = /^([A-Za-z]+){0,1},\s+([A-Za-z]+)\s+([A-Za-z]+)?$/.test($(this).val());
    // /^(([A-Z]))
    if (provera === true) {
      $(this).css('outline', '0px solid');
    } else {
      $(this).css('outline', '4px solid orange');
      $(this).after('<span style="color: orange;">Име и презиме није правилно написано</span><br>')
    }
  });
  
  $('#imeprezime1').on('focus', function(e) {
      $(this).next("span").remove();
      $(this).next("br").remove();
  });
 
});