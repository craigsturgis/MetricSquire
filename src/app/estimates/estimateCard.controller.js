'use strict';

(function () {
    angular
        .module('estimates')
        .controller('EstimateCardController', EstimateCardController);

    EstimateCardController.$inject = [
        'card',
    ];

    function EstimateCardController(card) {

        var vm = this;

        vm.card = card;
        console.log(card);

        vm.voteButtons = [
            {
                label: '0.5',
                value: 0.5,
            },
            {
                label: '1',
                value: 1,
            },
            {
                label: '2',
                value: 2,
            },
            {
                label: '3',
                value: 3,
            },
            {
                label: '5',
                value: 5,
            },
            {
                label: '8',
                value: 8,
            },
            {
                label: '13',
                value: 13,
            },
            {
                label: '21',
                value: 21,
            },
        ];
    }

})();
