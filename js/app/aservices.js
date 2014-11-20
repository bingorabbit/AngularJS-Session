var angularServices = angular.module("angularServices", ['ngResource']);

angularServices.factory('AuthorsService', function ($resource) {
    return $resource('data/authors.json', {}, {
        getData: {method: 'GET', isArray: false}
    });
});