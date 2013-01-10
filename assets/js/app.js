'use strict';

var app = angular.module('youtubeSearchApp', [], function($routeProvider, $locationProvider)
{
    $routeProvider
    .when('/', {
        controller: SearchController,
        templateUri: 'view/search-view.html'
    });
})
.run(function($scope, $location)
{
    console.log($location)
});

function SearchController($scope)
{
    console.log(arguments)

    $scope.submit = function()
    {
        console.log(arguments)
    }
}