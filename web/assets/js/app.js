var ninjaWorkoutApp = angular.module('ninjaWorkoutApp', ['ngMaterial', 'timer']);

ninjaWorkoutApp.config(function($mdThemingProvider){
    $mdThemingProvider.theme('default');
});