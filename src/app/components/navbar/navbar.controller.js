'use strict';

(function () {
    angular
        .module('metricSquire')
        .controller('NavbarController', NavbarCtrl);

    NavbarCtrl.$inject = [
        'Global'
    ];

    function NavbarCtrl(
        Global
    ) {

        var vm = this;

        vm.global = Global;
    }

})();
