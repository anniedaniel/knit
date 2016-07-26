function showInfo(data, tabletop) {
	var resource = $(".template-resource").html();
	var resourceTemplate = Handlebars.compile(resource);
	$.each( tabletop.sheets("resources").all(), function(i, resource) {
	  var html = resourceTemplate(resource);
	  $("#resources").append(html);
	});
}