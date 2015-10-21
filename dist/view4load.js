/**
 * Created by Rodrigo Bastos on 20/10/15.
 */

var app = angular.module('View4Load', []);

var colors =  {
  yellow: 'background-color: #f9edbe;border: 1px solid #f0c36d;',
  blue: 'background-color: #62a4ff;border: 1px solid #78e5f0;',
  white: 'background-color: #ffe8fe;border: 1px solid #dad6db;'
};

app.directive('load', function ($http)
{
  return {
    restrict: 'A',
    template: function (element, attrs){

      var color = colors[attrs.templateColor];
      var label = attrs.templateLabel;

      return '<div ng-if="isShow" style="left: 0;top: 0;margin: 0;font-family: arial, sans-serif;font-weight: bold;visibility: hidden;z-index: 1050;position: absolute;text-align: center;width: 100%;height: 100%;">' +
        '<div style="position: relative;display: inline-block;visibility: visible;font-size: 80%;padding: 6px 10px;' + color + 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">' +
        ''+label+'</div></div>';
    },
    link: function (scope, element, attrs)
    {

      console.log('attrs', attrs.view);
      scope.$watch(function() {
        return $http.pendingRequests.length > 0;
      }, function(hasPending) {
        scope.isShow = !!hasPending;
      });

    }
  };

});
