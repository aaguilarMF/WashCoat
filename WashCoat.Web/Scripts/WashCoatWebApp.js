﻿var WashCoatWebApp = angular.module('WashCoatWebApp', ['ngRoute', 'ui.grid']);//  'ngGrid']);

// controllaas
WashCoatWebApp.controller('LandingPageController', LandingPageController);
WashCoatWebApp.controller('LoginController', LoginController);
WashCoatWebApp.controller('RegisterController', RegisterController);
WashCoatWebApp.controller('WashCoatController', WashCoatController);

//factoraaas
WashCoatWebApp.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
WashCoatWebApp.factory('LoginFactory', LoginFactory);
WashCoatWebApp.factory('RegistrationFactory', RegistrationFactory);
WashCoatWebApp.factory('WashCoatFactory', WashCoatFactory);

var configFunction = function ($routeProvider, $httpProvider) {

    $routeProvider.
        when('/routeOne', {
            templateUrl: '/routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        })
        .when('/washCoatDataView', {
            templateUrl: '/WashCoat/Index',
            controller: WashCoatController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider' , '$httpProvider'];

WashCoatWebApp.config(configFunction);