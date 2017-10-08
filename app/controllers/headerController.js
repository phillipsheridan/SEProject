app.controller("headerController", function($scope, $state, $mdSidenav) {

  $scope.goToNim = function() {
    $state.go('Nim');
  };
  $scope.goToHome = function() {
    $state.go('home');
  };
  $scope.goToLogin = function() {
    $state.go('login');
  };

  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle();
    console.log("toggle");
  };


});
