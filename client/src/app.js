import angular from 'angular'
angular.module('employers', [])
  .controller('EmployerController', function(){
    this.placesToWork = ['Hardees', 'Walmart'];
  })