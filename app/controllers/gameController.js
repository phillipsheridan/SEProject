app.controller("gameController", function($scope, $state) {

  $scope.gameData = {
  column0: [1, 1, 1, 1, 1],
  column1 : [1, 1, 1, 1],
  column2 : [1, 1, 1],
  turn1 : true,
  gameOver : false
};

var checkForEmptyColumns = function() {
  return $scope.gameData.column0.length + $scope.gameData.column1.length + $scope.gameData.column2.length;

};


$scope.gemClicked= function(col, index) {
  var initialLength = $scope.gameData["column" + col].length;
  console.log("column: " + col);
  console.log("index: " + index);
  for (var i = 0; i <= index; i++) {
    $scope.gameData["column" + col].pop();
  }
  $scope.deselectGroup(col, initialLength - index);
  $scope.gameData.turn1 = !$scope.gameData.turn1;

  if (!checkForEmptyColumns())
 {
   $scope.gameData.gameOver = true;
 }

};

$scope.selectGroup = function(col, index) {
  //alert('index is ' + index);
  var i = 0;
  var obj = document.getElementsByClassName("group" + col);
  //console.log(list);
  for (var prop in obj) {
  if (obj.hasOwnProperty(prop) && i <= index) {
    //console.log(`obj.${prop} = ${obj[prop]}`);
    var wrappedResult = angular.element(obj[prop]);
    wrappedResult.addClass('selectedGem');
  }
  i++;
}

};

$scope.deselectGroup = function(col, index) {
  //alert('index is ' + index);
  var i = 0;
  var obj = document.getElementsByClassName("group" + col);
  //console.log(list);
  for (var prop in obj) {
  if (obj.hasOwnProperty(prop) && i <= index) {
    //console.log(`obj.${prop} = ${obj[prop]}`);
    var wrappedResult = angular.element(obj[prop]);
    wrappedResult.removeClass('selectedGem');
  }
  i++;
}

};

$scope.refresh = function() {
  location.reload();
};



});
