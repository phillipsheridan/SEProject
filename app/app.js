var app = angular.module('app', ['ui.router', 'ngMaterial']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider.state('game', {
    url: '/game',
    templateUrl: 'app/templates/game.html',
    controller: 'gameController'
  })
  .state('home', {
    url: '/home',
    templateUrl: 'app/templates/home.html',
  })



}]);
