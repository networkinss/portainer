angular.module('portainer.app').component('konzepteDatatable', {
  templateUrl: './konzepteDatatable.html',
  controller: 'KonzepteDatatableController',
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
