document.observe('dom:loaded', function(){
	
	var html = new Array();
	var i = 0;
	html[i++] = "<div id='view-message'>"
	html[i++] = "	<div id='systemmessage'>"
	html[i++] = "		<div style='background:rgb(245,245,255);border:1px solid grey;padding:0 1em;margin:1em 0'>"
	html[i++] = "			<h2>Engineering Central Jenkins Service RTP</h2><br>"
	html[i++] = "			Part of the Engineering IT Continuous Integration and Delivery Services - "
	html[i++] = "			<a href='https://engit.cisco.com/ci'>https://engit.cisco.com/ci</a>"
	html[i++] = "			<ul>"
	html[i++] = "				<li>For help, questions, or onboarding, you can create a case here: "
	html[i++] = "					<a href='https://engit.cisco.com/case'>https://engit.cisco.com/case</a></li>"
	html[i++] = "				<li>You can also ask the EngIT community for help and browse our knowledge base at our "
	html[i++] = "							<a href='https://engit.cisco.com/answers/'>Questions and Answers site</a>.</li>"
	html[i++] = "				<li>View our <a href='https://engit.cisco.com/#/ci/jenkins/servicedetails#change-log'>recent changes</a></li>"
	html[i++] = "					</ul>"
	html[i++] = "				Advisory: The Test Result Trend graph has been identified as a source of excessive server load due to a memory leak and has been disabled until a patch can be installed. We apologize for any inconvenience."
	html[i++] = "				<br><br>"
	html[i++] = "		</div>"
	html[i++] = "		<div id='description'></div>"
	html[i++] = "		<div></div>"
	html[i++] = "	</div>"
	html[i++] = "</div>"

	var htmls = html.join('');
 
	$$("form[name='login']")[0].insert({before: htmls});
});