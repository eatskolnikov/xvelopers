app.controller("HomeCtrl", ["$sce", "$http", "$filter", function($sce, $http, $filter)
{
  var orderBy = $filter('orderBy');
  this.xvelopers =[];
  this.giveMeHtml = function(text){
    return $sce.trustAsHtml(text);
  };
  this.init = function(){
    $http.get('./xvelopers.json').success(angular.bind(this, function(data){
      this.xvelopers = orderBy(data,'name',false);
    }));
  };
  this.init();
}]);
