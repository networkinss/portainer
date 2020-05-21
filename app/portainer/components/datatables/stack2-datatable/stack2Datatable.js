angular.module('portainer.app').component('stack2Datatable', {
  templateUrl: './stack2Datatable.html',
  controller: 'Stack2DatatableController',
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
