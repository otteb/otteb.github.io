angular.module('portfolio', ['ui.router', 'ngSanitize'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
});
