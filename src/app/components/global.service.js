'use strict';

(function () {
    //Global service for global variables
    angular
        .module('metricSquire')
        .service('Global', Global);

    Global.$inject = [
        'Trello'
    ];

    function Global(Trello) {

        var singleton = this;

        singleton.isAuthed = false;
        singleton.me = null;
        singleton.onAuthorize = onAuthorize;
        singleton.popupAuth = popupAuth;
        singleton.logout = logout;

        Trello.authorize({
            interactive: false,
            success: onAuthorize,
            error: clearAuth,
        });

        function onAuthorize() {
            singleton.isAuthed = true;
            Trello.me().then(function(member){
                singleton.me = member;
            });
        }

        function popupAuth() {
            Trello.authorize({
                type: 'popup',
                name: 'Haven Trello Connector',
                scope: { write: true, read: true },
                success: onAuthorize
            });
        }

        function logout() {
            Trello.deauthorize();
            clearAuth();
        }

        function clearAuth() {
            singleton.isAuthed = false;
            singleton.me = null;
        }

        return singleton;
    }
})();
