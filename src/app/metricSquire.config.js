'use strict';

(function () {
    angular
        .module('metricSquire')
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('root', {
                    url: '/',
                    views: {
                        'header': {
                            controller: 'NavbarCtrl as vm',
                            templateUrl: 'app/components/navbar/navbar.html'
                        },
                        'body': {
                            templateUrl: 'app/main/main.html',
                            controller: 'MainCtrl'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/');
        });
})();
