'use strict';

(function () {
    angular
        .module('trello')
        .constant('TrelloClient', window.Trello);

    angular
        .module('trello')
        .service('Trello', Trello);

    Trello.$Inject = [
        'TrelloClient',
        '$resource',
        '$q'
    ];

    function Trello(TrelloClient, $resource, $q) {

        return {
            authorize: function(options) {
                TrelloClient.authorize(options);
            },
            authorized: function() {
                return TrelloClient.authorized();
            },
            capturedCards: function(params) {
                var def = $q.defer();

                TrelloClient.get('members/me/cards', params || {}, function(cards) {
                    def.resolve(cards);
                }, function(err) {
                    def.reject(err);
                });

                return def.promise;
            },
            captureItActions: function(params) {
                var def = $q.defer();

                TrelloClient.get('boards/JyqF3Jlr/actions', params || {}, function(actions) {
                    def.resolve(actions);
                }, function(err) {
                    def.reject(err);
                });

                return def.promise;
            },
            deauthorize: function() {
                TrelloClient.deauthorize();
            },
            estimateCards: function(listId, params) {
                var def = $q.defer();

                TrelloClient.get('lists/' + listId + '/cards', params || {}, function(cards) {
                    def.resolve(cards);
                }, function(err) {
                    def.reject(err);
                });

                return def.promise;
            },
            cardDetail: function(cardId, params) {
                var def = $q.defer();

                TrelloClient.get('cards/' + cardId, params || {}, function(card) {
                    def.resolve(card);
                }, function(err) {
                    def.reject(err);
                });

                return def.promise;
            },
            me: function() {
                var def = $q.defer();

                TrelloClient.get('members/me', function(member) {
                    def.resolve(member);
                }, function(err) {
                    def.reject(err);
                });

                return def.promise;
            },
            get: function(path, params) {
                var def = $q.defer();

                TrelloClient.get(path, params || {}, function(response) {
                    def.resolve(response);
                }, function(err) {
                    def.reject(err);
                });

                return def.promise;
            }
        };
    }
})();
