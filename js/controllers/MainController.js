app.controller('MainController', ['$scope','$log','forecast', function($scope, $log, forecast) {
  forecast.success(function(data) {
    $scope.fiveDay = data;
    $log.info(data)
  });
}]);
