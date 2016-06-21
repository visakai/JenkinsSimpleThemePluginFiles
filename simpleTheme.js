(function() {
  console.log("Hi from closure");
  //var content = $("form[name='login']").innerHTML;
  var len = document.getElementsByName("login").length;
  console.log(len);
})();
