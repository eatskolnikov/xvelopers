app.directive('scrollToXveloperDirective', ['$timeout', function($timeout) {
  var link = function(scope, element, attrs)
  {
    if (scope.$last)
    {
      $timeout(scope.$parent.home.scrolltoxveloper,0);
    }
  };
  return {
    link: link
  };
}]);
