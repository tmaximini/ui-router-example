'use strict';

angular
  .module('uiRouterApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    // default to home
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
        url: '/home',
        templateUrl: 'views/partials/home.html',
      })
      .state('about', {
        // we'll get to this in a bit
        url: '/about',
        templateUrl: 'views/partials/about.html',
        controller: 'MainCtrl'
      })
      // nested list with custom controller
      .state('about.item', {
        url: '/:item',
        templateUrl: 'views/partials/item.html',
        controller: function($scope, $stateParams) {
          $scope.item = $stateParams.item;
        }
      })
      .state('contact', {
        // we'll get to this in a bit
        url: '/contact',
        templateUrl: 'views/partials/contact.html'
      });

  });
