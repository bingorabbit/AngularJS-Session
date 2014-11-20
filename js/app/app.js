var angularApp = angular.module("angularApp", ['ngRoute', 'angularControllers', 'angularServices']); // [] a list of requirements.

angularApp.run(function($rootScope){
        $rootScope.yourName = "Ibrahim";
        $rootScope.setActive = function(tab_name){
            $rootScope.homeActive = false;
            $rootScope.aboutActive = false;
            $rootScope.contactActive = false;
            $rootScope[tab_name+'Active'] = true;
        }
    })
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        })
        .when('/about',{
            templateUrl: 'partials/about.html',
            controller: 'AboutController'
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'ContactController'
        })
        .otherwise({
            redirectTo: '/'
        })
    });