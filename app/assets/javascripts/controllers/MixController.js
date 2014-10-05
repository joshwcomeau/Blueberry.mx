function MixController($scope, $routeParams, $resource) {
  this.phone = Phone.get({phoneId: $routeParams.phoneId}, function(mix) {
    // Do any view-related stuff here, like setting the background image or audio link.
  });
}
MixController.$inject = ['$scope', '$routeParams', '$resource']


var controllers = angular.module('controllers');
controllers.controller("MixController", ['$scope', '$routeParams', MixController])
