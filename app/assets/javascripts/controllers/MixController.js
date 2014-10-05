function MixController($scope, $routeParams, Mix) {
  this.mix = Mix.get({mixId: $routeParams.mixId}, function(mix) {
    // Do any view-related stuff here, like setting the background image or audio link.
  });
}
MixController.$inject = ['$scope', '$routeParams', 'Mix']


var controllers = angular.module('controllers');
controllers.controller("MixController", ['$scope', '$routeParams', 'Mix'])
