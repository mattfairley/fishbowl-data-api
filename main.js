var movieApp = {}

movieApp.key = '9314b8803e6b1e173d0c8a52303b82ce';

movieApp.search = function(name){
	$.ajax({
		url: 'http://api.themoviedb.org/3/search/person',
		type: 'GET',
		dataType: 'jsonp',
		data: {
			api_key: movieApp.key,
			query: name
		},

		success: function(result){
			console.log(result);
		}
	});
};

movieApp.getCredits = function(id){
	
}

movieApp.init = function(){
	$('#search').on('submit', function(e){
		e.preventDefault();
		var movie = $('#movie').val()
		if (movie) {
			movieApp.search(movie);
		}
	});
};

$(function(){
	movieApp.init();
});