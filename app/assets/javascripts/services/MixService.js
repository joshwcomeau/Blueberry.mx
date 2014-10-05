var services = angular.module('services');

services.factory('Mix', ['$resource', function ($resource) {
  return $resource('/mixes/:mixId.json', {}, {
    query: { method: 'GET', params: {mixId: 'mixes'}, isArray: true }
  });
}]);