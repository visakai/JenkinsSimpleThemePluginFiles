document.observe('dom:loaded', function(){
 console.log("loaded");
 console.log($$("form[name='login']").first().innerHTML);
});