'use strict';

(function () {
    angular
        .module('estimates')
        .config(EstimatesStates);

    function EstimatesStates($stateProvider) {
        $stateProvider
            .state('root.estimates', {
                url: 'estimates',
                abstract: true,
                resolve: {
                    readyCards: function(Trello) {
                        return Trello.estimateCards('54eb460a4d5ce2e8acd49cd9', {});
                    }
                },
                template: '<div ui-view="estimates"></div>',

            }).state('root.estimates.list', {
                url: '',
                views: {
                    estimates: {
                        templateUrl: 'app/estimates/estimates.html',
                        controller: 'EstimatesController as vm',
                    }
                },

            }).state('root.estimates.detail', {
                url: '/:shortLink',
                resolve: {
                    card: function(Trello, $stateParams) {
                        return Trello.cardDetail($stateParams.shortLink, {});
                    }
                },
                views: {
                    estimates: {
                        templateUrl: 'app/estimates/estimateCard.html',
                        controller: 'EstimateCardController as vm',
                    }
                },
            });
    }

})();
