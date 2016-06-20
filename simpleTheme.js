(function() {
  alert("Hi from closure");
  var content = $$("form[name='login']").innerHTML;
  alert(content);
})();

