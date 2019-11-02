angular.module('portainer.app').component('imagesDatatable', {
  templateUrl: './imagesDatatable.html',
  controller: 'ImagesDatatableController',
  bindings: {
    titleText: '@',
    titleIcon: '@',
    tableKey: '@',
    orderBy: '@',
    reverseOrder: '<',
    endpointManagement: '<',
    accessManagement: '<',
    removeAction: '<',
    retrievePage: '<'
  }
});
