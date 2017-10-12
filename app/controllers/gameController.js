app.controller("gameController", function($scope, $state, $mdSidenav) {

  $scope.gameData = {
  column0: [1, 1, 1, 1, 1],
  column1 : [1, 1, 1, 1],
  column2 : [1, 1, 1],
  turn1 : true,
  gameOver : false
};

$scope.toggleLeft = function() {
  $mdSidenav('left').toggle();
  console.log("toggle");
};

var checkForEmptyColumns = function() {
  return $scope.gameData.column0.length + $scope.gameData.column1.length + $scope.gameData.column2.length;

};

$scope.isGameOver = function() {
  if (checkForEmptyColumns() == 0) {
    console.log(checkForEmptyColumns());
    return true;
  }
  return false;
}


$scope.gemClicked= function(col, index) {
  //check if turn1 is true, if not don't do any of this
  //console.log("user's turn is: " + $scope.gameData.turn1);
  if ($scope.gameData.turn1) {
  var initialLength = $scope.gameData["column" + col].length;
  console.log("column: " + col);
  console.log("index: " + index);
  for (var i = 0; i <= index; i++) {
    $scope.gameData["column" + col].pop();
  }
  $scope.deselectGroup(col, initialLength - index);
  $scope.gameData.turn1 = !$scope.gameData.turn1;
  $scope.$broadcast("turnover");

  if (!checkForEmptyColumns())
 {
   $scope.gameData.gameOver = true;
 }
}
};


$scope.getColumnCount = function(columnNumber) {
  return $scope.gameData["column" + columnNumber].length;
};

$scope.isColumnEmpty = function(columnNumber) {
  if ($scope.getColumnCount(columnNumber) == 0) {
    return true;
  }
  return false;

};

$scope.getRandomColumn = function(number) {
  return (Math.trunc(Math.random() * number));
}



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
