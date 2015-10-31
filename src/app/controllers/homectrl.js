app.controller("HomeCtrl", ["$scope", "$rootScope", "$window", "$sce", "$http", function($scope, $rootScope, $window, $sce, $http)
{
  $scope.giveMeHtml = function(text){
    return $sce.trustAsHtml(text);
  };
  $scope.xvelopers =[];
  $scope.init = function(){
    $http.get('./xvelopers.json').success(function(data){
      console.log(data);
      $scope.xvelopers = data;
    });
  };
  $scope.init();
}]);
