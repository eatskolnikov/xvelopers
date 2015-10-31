app.controller("HomeCtrl", ["$sce", "$http", function($sce, $http)
{
  this.giveMeHtml = function(text){
    return $sce.trustAsHtml(text);
  };
  this.xvelopers =[];
  this.init = function(){
    $http.get('./xvelopers.json').success(angular.bind(this, function(data){
      this.xvelopers = data;
    }));
  };
  this.init();
}]);
