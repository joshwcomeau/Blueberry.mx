blueberry = angular.module('blueberry', [
  'templates',
  'ngRoute',
  'controllers'
]);

blueberry.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'index.html',
    controller:  'MixesController'
  });
}]);

controllers = angular.module('controllers', [])
controllers.controller("RecipesController", RecipesController)

function RecipesController() {
  
}