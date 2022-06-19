$('#form').on('submit', function(e){
  e.preventDefault();
  let email = $('#imejl1');
  let password = $('#lozinka1');
var form = new FormData();
form.append("email", email.val());
form.append("password", password.val());
form.append("apitoken", "RLdQISqyjqn8gN2jH6DyPMXidzalE1P8qiuPnXW6kxJeO8bQKTtJcddLzZJdLLvk6kZ6SSyEGjcWDMk4j04KsWtWNE");

var settings = {
  "url": "https://vsis.mef.edu.rs/projekat/ulaznice/public_html/api/login",
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
});