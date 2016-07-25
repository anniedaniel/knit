$(document).ready( function() {
Tabletop.init( { key: '1w40A5LqRz3ZLPu3zIwE5tCUsNI81I8XgfsZ9J2DiG7k',
                 callback: showInfo,
                 parseNumbers: true } );
});

function showInfo(data, tabletop) {
	var video = $(".template-video").html();
	var videoTemplate = Handlebars.compile(video);
	$.each( tabletop.sheets("videos").all(), function(i, video) {
	  var html = videoTemplate(video);
	  $("#videos").append(html);
	});

	var pattern = $(".template-pattern").html();
	var patternTemplate = Handlebars.compile(pattern);
	$.each( tabletop.sheets("patterns").all(), function(i, pattern) {
	  var html = patternTemplate(pattern);
	  $("#patterns").append(html);
	});

	var resource = $(".template-resource").html();
	var resourceTemplate = Handlebars.compile(resource);
	$.each( tabletop.sheets("resources").all(), function(i, resource) {
	  var html = resourceTemplate(resource);
	  $("#resources").append(html);
	});
}