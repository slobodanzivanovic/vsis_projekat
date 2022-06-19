$(function provera() {
$('#name').on('blur', function(e) {
  var provera = /(?=^.{5,180}$)^[А-ЯЉЊШЂЧЋЖЏ][а-яčćžđšžљњшђчћжџ]+(?:[\s-][А-ЯЉЊШЂЧЋЖЏ][а-яčćžđšžљњшђчћжџ]+)+$|^[A-ZŠĐŽČĆ][a-zčćžđšž]+(?:[\s-][A-ZŠĐŽČĆ][a-zčćžđšž]+)+$/.test($(this).val());
  if (provera === true) {
    $(this).css('outline', '0px solid');
  } else {
    $(this).css('outline', '4px solid orange');
    $(this).after('<span style="color: orange;">Име и презиме није правилно написано</span><br>')
  }
});

$('#name').on('focus', function(e) {
    $(this).next("span").remove();
    $(this).next("br").remove();
});
});

$(function provera() {
  $('#phone').on('blur', function(e) {
    var provera = /^[+][1-9][0-9][0-9]{7,12}$/.test($(this).val());
    if (provera === true) {
      $(this).css('outline', '0px solid');
    } else {
      $(this).css('outline', '4px solid orange');
      $(this).after('<span style="color: orange;">Телефон није исправан</span><br>')
    }
  });
  
  $('#phone').on('focus', function(e) {
      $(this).next("span").remove();
      $(this).next("br").remove();
  });
  });

  $(function provera() {
    $('#password').on('blur', function(e) {
      var provera = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){6,}$/.test($(this).val());
      if (provera === true) {
        $(this).css('outline', '0px solid');
      } else {
        $(this).css('outline', '4px solid orange');
        $(this).after('<span style="color: orange;">Лозинка није довољно јака</span><br>')
      }
    });
    
    $('#password').on('focus', function(e) {
        $(this).next("span").remove();
        $(this).next("br").remove();
    });
    });

    $(function provera() {
      $('#email').on('blur', function(e) {
        var provera = /^$/.test($(this).val());
        if (provera === true) {
          $(this).css('outline', 'opx solid');
        } else {
          $(this).css('outline', '4px solid orange');
        }
      })
    })


$('#form').on('submit', function(e){
  e.preventDefault();
  let name = $('#name');
  let email = $('#email');
  let phone = $('#phone');
  let password = $('#password');
  var form = new FormData();
  form.append("name", name.val());
  form.append("email", email.val());
  form.append("phone", phone.val());
  form.append("password", password.val());
  form.append("apitoken", "RLdQISqyjqn8gN2jH6DyPMXidzalE1P8qiuPnXW6kxJeO8bQKTtJcddLzZJdLLvk6kZ6SSyEGjcWDMk4j04KsWtWNE");
  
  var settings = {
    "url": "https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/register",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Accept": "application/json"
    },
    "processData": false,
    "mimeType": "multipart/form-data",
    "contentType": false,
    "data": form,
    "dataType": "json"
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

})