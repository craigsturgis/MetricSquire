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
                        return Trello.estimateCards('556b2fa7e49b7bea50cc8303', {});
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
                    },
                    checkLists: function(Trello, $stateParams) {
                        return Trello.get(cardApiPath('checklists', $stateParams));
                    },
                    comments: function(Trello, $stateParams) {
                        return Trello.get(cardApiPath('actions', $stateParams), {
                            filter: 'commentCard'
                        });
                    },
                    votes: function(Trello, $stateParams) {
                        return Trello.get(cardApiPath('membersVoted', $stateParams));
                    },
                },
                views: {
                    estimates: {
                        templateUrl: 'app/estimates/estimateCard.html',
                        controller: 'EstimateCardController as vm',
                    }
                },
            });

        function cardApiPath(verb, $stateParams) {
            return [
                'cards/',
                $stateParams.shortLink,
                '/',
                verb,
            ].join('');
        }
    }

})();
