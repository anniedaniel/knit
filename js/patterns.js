function showInfo(data, tabletop) {
	var pattern = $(".template-pattern").html();
	var patternTemplate = Handlebars.compile(pattern);
	$.each( tabletop.sheets("patterns").all(), function(i, pattern) {
	  var html = patternTemplate(pattern);
	  $("#patterns").append(html);
	});
}