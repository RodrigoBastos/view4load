/**
 * Created by Rodrigo Bastos on 20/10/15.
 */

var app = angular.module('application', ['View4Load']);


app.controller('ViewCtrl', function ($scope, $http) {
  
  $scope.getPosts = function (){
    $http.get('http://jsonplaceholder.typicode.com/posts').success(
      function (data) {
        $scope.posts = data;
      }
    )
  }
});