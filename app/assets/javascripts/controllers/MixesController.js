function MixesController($scope, $routeParams, $location, Mix) {
  this.search = function(keywords) {
    $location.path("/").search('keywords', this.keywords);
  }
  console.log(Mix);
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
}
MixesController.$inject = ['$scope', '$routeParams', '$location', 'Mix'];


controllers = angular.module('controllers');
controllers.controller("MixesController", ['$scope', '$routeParams', '$location', 'Mix', MixesController])
