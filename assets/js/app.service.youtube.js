'use strict';

app.service('youtubeService', ['$q', '$http', 'youtubeFactory', function($q, $http, youtubeFactory)
{
    return {
        search: function(searchQuery)
        {
            var dfd = $q.defer();

            $http
            .jsonp('http://gdata.youtube.com/feeds/api/videos?alt=json&q=' + encodeURIComponent(searchQuery) + '&callback=JSON_CALLBACK')
            .success(function(results)
            {
                var items = youtubeFactory.parse(results);

                dfd.resolve(items);
            })
            .error(function()
            {
                dfd.reject();
            });

            return dfd.promise;
        }
    };
}]);