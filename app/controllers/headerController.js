app.controller("headerController", function($scope, $state) {
  $scope.goToGame = function() {
    $state.go('game');
  };
  $scope.goToHome = function() {
    $state.go('home');
  };

});
