var app = angular.module("MyMovies", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){


	$stateProvider
		.state("movies", {
			url: "/movies",
			templateUrl: "/scripts/Movies/movies.html",
			controller: "MoviesCtrl"
		})

});
