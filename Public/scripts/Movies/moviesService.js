var app = angular.module("MyMovies");

app.factory("moviesService", function($http){
	return {
		addMovie: function(movie){
			return $http({
				method: "POST",
				url: "/api/movies",
				data: {title: movie.title}
			})
		}
	}

});