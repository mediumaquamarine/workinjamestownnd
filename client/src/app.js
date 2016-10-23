import angular from 'angular'
angular.module('employers', [])
  .controller('EmployerController', function($http){

    $http.get('/employers').then((response) => {
      this.placesToWork = response.data;
    })
  })