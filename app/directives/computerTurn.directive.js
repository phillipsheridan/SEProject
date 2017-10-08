app.directive('computerTurn', function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      console.log(element);
      scope.$on("turnover", function(event, data) {
        console.log("computer's turn");
        $timeout(function() {
          var rand;
          // get the random column that is not empty
          var isEmpty = false;
          while (!isEmpty && !scope.gameData.gameOver) {
            rand = scope.getRandomColumn(3);
            if (!scope.isColumnEmpty(rand)) {
              console.log("rand: " + rand);
              isEmpty = true;
              var length = scope.getColumnCount(rand);

              var take = scope.getRandomColumn(length) + 1;
              for (var i = 0; i < take; i++) {
                scope.gameData["column" + rand].pop();
                }
              }
              scope.gameData.turn1 = true;


            if (scope.isGameOver()) {
              scope.gameData.gameOver = true;
              scope.gameData.turn1 = true;
            }

          }

          //get the length of that column

          //remove a random number of gems from that column



        }, 2000);

      });
    }
  }
})
