import angular from 'angular'
import 'angular-ui-router'
angular.module('employers', ['ui.router'])

  .config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/employers')

    $stateProvider
    .state ('employers', {
      url:'/employers',
      templateUrl: 'employers/employers-nav.html'
    })
  })

  .controller('EmployerController', function($http){

    $http.get('/employers').then((response) => {
      this.placesToWork = response.data;
    })
  })