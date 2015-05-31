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
            'estimates',
            'lodash',
        ]);

    angular
        .module('estimates', ['trello', 'lodash', 'angularMoment']);

    angular
        .module('trello', []);

    angular
        .module('lodash', []);
})();
