(function() {
  alert("Hi from closure");
  var content = $$("form[name='login']").innerHTML;
  alert(content);
})();

document.observe("dom:loaded",function(){
	alert("in observe");
	$("l10n-footer").update($("right-top-nav").innerHTML),$("right-top-nav").update($("login-field").innerHTML);
	
	var a=new Element("div",{id:"search-wrap",style:"display: inline-block;"}),b=$("right-top-nav"),c=b.childNodes[0];
	
	c.childNodes[1].insert({before:a}),$("search-wrap").update($$("#top-panel table td:nth-child(2)")[0].innerHTML);
	
	var d=$$("body table");
	
	d[d.length-1].toggleClassName("footer-table"),$("main-table").wrap("div",{id:"main-table-wrap"}),$("main-table").style=null,$("top-panel").remove()
	});