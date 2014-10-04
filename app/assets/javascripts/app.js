blueberry = angular.module('blueberry', [
  'templates',
  'ngRoute',
  'ngResource',
  'controllers'
]);

blueberry.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl:  'index.html',
    controller:   'MixesController',
    controllerAs: 'mixes'
  });
}]);

function MixesController($scope, $routeParams, $location, $resource) {
  this.search = function(keywords) {
    $location.path("/").search('keywords', this.keywords);
  }
  var Mix = $resource('/mixes/:mixId', {
    mixId: "@id",
    format: 'json'
  });

  if ( $routeParams.keywords ) {
    Mix.query({
      keywords: $routeParams.keywords
    }, function(results) {
      this.mixes = results
    });
  } else {
    this.selectedMixes = []
  }
}

MixesController.$inject = ['$scope', '$routeParams', '$location', '$resource']

controllers = angular.module('controllers', [])
controllers.controller("MixesController", ['$scope', '$routeParams', '$location', MixesController])


mixlist = [
  {
    id: 1,
    name: 'Supersonic Overdrive',
    description: 'An uplifting mix of hard trance, hard dance and hard drives.'
  },
  {
    id: 2,
    name: 'ChilZone',
    description: 'A downtempo stroll through a dreamy park.'
  },
  {
    id: 3,
    name: 'Pot Pourri',
    description: 'There\'s something for everyone in this wild, all-over-the-place mix.'
  }
]