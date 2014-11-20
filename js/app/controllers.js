var angularControllers = angular.module('angularControllers', []);

angularControllers.controller('HomeController', ['$scope', function($scope){
    $scope.setActive('home');
    $scope.clock = {
        now: new Date()
    };
    setInterval(function(){
        $scope.$apply(function(){
            $scope.clock.now = new Date();
        })
    }, 1000)
}]);

angularControllers.controller('AboutController', ['$scope', 'AuthorsService', function($scope, AuthorsService){
    $scope.setActive('about');
    AuthorsService.getData(function(data){
        $scope.authors = data.authors;
    });
}]);

angularControllers.controller('ContactController', ['$scope', function($scope){
    $scope.setActive('contact');
}]);