function showInfo(data, tabletop) {
	var video = $(".template-video").html();
	var videoTemplate = Handlebars.compile(video);
	$.each( tabletop.sheets("videos").all(), function(i, video) {
	  var html = videoTemplate(video);
	  $("#videos").append(html);
	});
}