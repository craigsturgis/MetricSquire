'use strict';

(function () {
    angular
        .module('metricSquire')
        .config(MetricSquireConfig);

    function MetricSquireConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('root', {
                url: '/',
                abstract: true,
                resolve: {
                    //need to resolve so Trello auths anywhere
                    Global: 'Global',
                },
                controller: 'NavbarController as vm',
                templateUrl: 'app/components/navbar/navbar.html'
            }).state('root.nav', {
                url: '',
                templateUrl: 'app/main/main.html',
                controller: 'MainController as vm',
            });

        $urlRouterProvider.otherwise('/');
    }

})();
