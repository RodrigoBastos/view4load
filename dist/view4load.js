/**
 * Created by Rodrigo Bastos on 20/10/15.
 */

var app = angular.module('View4Load', []);


app.directive('load', function ($http)
{
  return {
    restrict: 'A',
    template:'<div ng-if="isShow" style="left: 0;top: 0;margin: 0;font-family: arial, sans-serif;font-weight: bold;visibility: hidden;z-index: 1050;position: absolute;text-align: center;width: 100%;height: 100%;">'+
    '<div style="position: relative;display: inline-block;visibility: visible;font-size: 80%;padding: 6px 10px;background-color: #f9edbe;border: 1px solid #f0c36d;box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);">'+
    'Carregando...</div></div>',
    link: function (scope, element, attrs)
    {
      scope.$watch(function() {
        return $http.pendingRequests.length > 0;
      }, function(hasPending) {
        scope.isShow = !!hasPending;
      });

    }
  };

});
