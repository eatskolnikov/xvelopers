app.controller("HomeCtrl", ["$sce", "$http", "$filter", "$location","$timeout", function($sce, $http, $filter, $location,$timeout)
{
  var orderBy = $filter('orderBy');
  this.xvelopers =[];
  this.giveMeHtml = function(text){
    return $sce.trustAsHtml(text);
  };
  this.scrolltoxveloper = function()
  {
      var id = $location.search().id;
      if(typeof(id) != 'undefined')
      {
        $timeout(function(){
          var element = document.getElementById(id);
          if(element !== null)
          {
            element.scrollIntoView();
            element.className += "uk-animation-reverse uk-animation-shake";
          }
        }, 0);
      }
  };
  this.init = function(){
    $http.get('./xvelopers.json').success(angular.bind(this, function(data){
      this.xvelopers = orderBy(data,'name',false);
    }));
  };
  this.init();
}]);
