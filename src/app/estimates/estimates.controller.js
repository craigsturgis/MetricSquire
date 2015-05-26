'use strict';

(function () {
    angular
        .module('estimates')
        .controller('EstimatesController', EstimatesCtrl);

    EstimatesCtrl.$inject = [
        'readyCards',
    ];

    function EstimatesCtrl(
        readyCards
    ) {

        var vm = this;

        vm.readyCards = readyCards;

    }
})();
