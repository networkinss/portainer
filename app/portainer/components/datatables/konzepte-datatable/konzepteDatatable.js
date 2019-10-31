angular.module('portainer.app').component('konzepteDatatable', {
  templateUrl: './konzepteDatatable.html',
  controller: 'GenericDatatableController',
  bindings: {
    titleText: '@',
    titleIcon: '@',
    dataset: '<',
    tableKey: '@',
    orderBy: '@',
    reverseOrder: '<',
    removeAction: '<',
    authenticationMethod: '<'
  }
});
