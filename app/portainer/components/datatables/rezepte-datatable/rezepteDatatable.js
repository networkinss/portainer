angular.module('portainer.app').component('rezepteDatatable', {
  templateUrl: './rezepteDatatable.html',
  controller: 'RezepteDatatableController',
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
