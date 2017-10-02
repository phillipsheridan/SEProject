var app = angular.module('app', ['ui.router', 'ngMaterial']);

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/login');
  $stateProvider.state('Nim', {
    url: '/Nim',
    templateUrl: 'app/templates/game.html',
    controller: 'gameController'
  })
  .state('login', {
    url: '/login',
    templateUrl: 'app/templates/login.html',
    controller: 'loginController'
  })



}])
// .config(function($mdThemingProvider) {
//   $mdThemingProvider.theme('default')
//     .dark();
// });
