'use strict';

app.controller('SearchController', ['$scope', 'youtubeService', function SearchController($scope, youtubeService)
{
    function onSearchSubmitError()
    {
        $scope.hasError = true;
    }

    function onSearchSubmitSuccess(items)
    {
        $scope.hasError = false;

        $scope.items = items;
    }

    $scope.hasError = false;

    $scope.onSearchSubmit = function()
    {
        youtubeService
        .search($scope.varSearch)
        .then(onSearchSubmitSuccess, onSearchSubmitError);
    }
}]);