blueberry = angular.module('blueberry', [
  'templates',
  'ngRoute',
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

function MixesController($scope, $routeParams, $location) {
  this.search = function(keywords) {
    $location.path("/").search('keywords', this.keywords);
  }

  console.log($routeParams);

  if ( $routeParams.keywords ) {
    search_term = $routeParams.keywords.toLowerCase();
    this.selectedMixes = mixlist.filter(function(mix) {
      return mix.name.toLowerCase().indexOf(search_term) != -1
    });
    console.log(this.selectedMixes);
  } else {
    this.selectedMixes = []
  }
}

MixesController.$inject = ['$scope', '$routeParams', '$location']

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