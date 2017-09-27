app.controller("loginController", function($scope, $http) {

  $scope.user = {
  userName: null,
  password: null
  };

  $scope.createUser = function()
    {
        data = {
            'userName' : $scope.user.userName,
            'password' : $scope.user.password
        };

        $http.post('assets/php/createUser.php', data)
        .success(function(data, status, headers, config)
        {
            console.log(status + ' - ' + data);
        })
        .error(function(data, status, headers, config)
        {
            console.log('error');
        });
    };

    $scope.login = function() {
      $http.get("assets/php/login.php")
    .then(function(response) {
        $scope.resp = response.data;
    });
    };





});
