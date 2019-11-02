angular.module('portainer.app').component('werkzeugeDatatable', {
  templateUrl: './werkzeugeDatatable.html',
  controller: 'WerkzeugeDatatableController',
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
