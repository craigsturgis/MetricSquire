'use strict';

(function () {
    angular
        .module('metricSquire')
        .controller('MainController', MainController);


    // MainController.$inject = [

    // ];

    function MainController() {

        var vm = this;

        vm.navItems = [
            {
                'title': 'Vote estimates',
                'sref': 'root.estimates.list',
                'description': 'Dev Team story point estimates',
            },
        ];

    }

})();
