function showInfo(data, tabletop) {
	var resource = $(".template-resource").html();
	var resourceTemplate = Handlebars.compile(resource);
	$.each( tabletop.sheets("resources").all(), function(i, resource) {
	  var html = resourceTemplate(resource);
	  $("#resources").append(html);
	});

	var abbrev = $(".template-abbrev").html();
	var abbrevTemplate = Handlebars.compile(abbrev);
	$.each( tabletop.sheets("abbreviations").all(), function(i, abbrev) {
	  var html = abbrevTemplate(abbrev);
	  $("#abbrevs").append(html);
	});
}