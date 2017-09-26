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

        $http.post('assets/php/login.php', data)
        .success(function(data, status, headers, config)
        {
            console.log(status + ' - ' + data);
        })
        .error(function(data, status, headers, config)
        {
            console.log('error');
        });
    }



});
