'use strict';

(function () {
    angular
        .module('metricSquire', [
            'ngAnimate',
            'ngTouch',
            'ngSanitize',
            'ngResource',
            'ui.router',
            'mm.foundation',
            'estimates'
        ]);

    angular
        .module('estimates', ['trello']);

    angular
        .module('trello', []);
})();
