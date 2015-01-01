var app = angular.module("MyMovies");

app.controller("MoviesCtrl", function($scope, moviesService){

	$scope.addMovie = function(){
		moviesService.addMovie($scope.movie)
		
	}

})