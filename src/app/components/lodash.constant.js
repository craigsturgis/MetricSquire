'use strict';

(function (w) {
    //Global service for global variables
    angular
        .module('lodash')
        .constant('_', w._);

}(window));
