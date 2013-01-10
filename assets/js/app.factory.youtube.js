'use strict';

app.factory('youtubeFactory', ['$q', function($q)
{
    return {
        parse: function(data)
        {
            var arr = data.feed.entry;
            var items = [ ];
            var item;

            for (var i = 0; i < arr.length; i++)
            {
                item = arr[i];

                items.push({
                    href: item.link[0].href,
                    thumbnail: item.media$group.media$thumbnail[0].url,
                    title: item.title.$t
                });
            }

            return items;
        }
    };
}]);