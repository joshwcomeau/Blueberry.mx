controllers = angular.module('controllers');

controllers.controller("MixesController", 
['$scope', '$routeParams', '$location', 'Mix', function($scope, $routeParams, $location, Mix) {
  // this.search = function(keywords) {
  //   $location.path("/").search('keywords', this.keywords);
  // }
  this.selectedMixes = Mix.query();

  // if ( $routeParams.keywords ) {
  //   Mix.query({
  //     keywords: $routeParams.keywords
  //   }, function(results) {
  //     this.mixes = results
  //   });
  // } else {
  //   this.selectedMixes = mixlist;
  // }
}]);
