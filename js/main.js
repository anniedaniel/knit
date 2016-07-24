$(document).ready( function() {
Tabletop.init( { key: '1w40A5LqRz3ZLPu3zIwE5tCUsNI81I8XgfsZ9J2DiG7k',
                 callback: showInfo,
                 parseNumbers: true } );
});

function showInfo(data, tabletop) {
	var source = $(".template-video").html();
	var template = Handlebars.compile(source);
	$.each( tabletop.sheets("videos").all(), function(i, video) {
	  var html = template(video);
	  $("#videos").append(html);
	});
}