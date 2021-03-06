angular.module('portainer.rest')
.factory('Registries', ['$resource', 'API_ENDPOINT_REGISTRIES', function RegistriesFactory($resource, API_ENDPOINT_REGISTRIES) {
  'use strict';
  return $resource(API_ENDPOINT_REGISTRIES + '/:id/:action', {}, {
    create: { method: 'POST', ignoreLoadingBar: true },
    query: { method: 'GET', isArray: true },
    get: { method: 'GET', params: { id: '@id' } },
    update: { method: 'PUT', params: { id: '@id' } },
    updateAccess: { method: 'PUT', params: { id: '@id', action: 'access' } },
    remove: { method: 'DELETE', params: { id: '@id'} }
  });
}]);
