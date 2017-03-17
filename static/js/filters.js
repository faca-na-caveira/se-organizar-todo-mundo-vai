'use strict';

angular.module('leadBlogApp.filters', [])

.filter('pagination', function()
{
	return function(input, start){
		start = +start;
		return input.slice(start);
	};
})

.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});