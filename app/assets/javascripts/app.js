var app2 = angular.module("myapp", ['ngResource', 'ngRoute', 'templates']);
app2.factory('MainMenu', function($resource){
  return $resource('welcome/:id', { id: '@id'},{
      index: { method: 'GET', isArray: true, responseType: 'json' }
    });
});
app2.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/index', {templateUrl: 'index.html.erb',   controller: 'WelcomeController'}).
                when('/products/:id', {templateUrl: "/show.html",   controller: 'WelcomeController'}).               
                otherwise({redirectTo: '/'});
}]);


/* Controllers */

// app2.controller("SectionCtrl", ['$scope','$routeParams', '$http', function($scope, $routeParams, $http) {
//     $http.get('/welcome/1.json').success(function(data) {
//       $scope.sections = data;
//     });
// }]);

app2.controller("WelcomeController", ['$scope','MainMenu', '$http', function($scope, MainMenu, $http) {  
  $scope.menus = MainMenu.index();
  $scope.category_click = function(obj, menu){
     $(document).ready(function() {
      angular.element(obj.target.nextElementSibling).toggle();
    });
  };
  $scope.sub_category_click = function (obj, submenu){
    $(document).ready(function () {
      angular.element(obj.target.nextElementSibling).toggle();
    })
  };
  $scope.show_products = function(section_id) {
     $http.get('/products/'+ section_id +'.json').success(function(data) {
      $scope.products = data;
    });
    $('.dropdown-menu').hide();
  };
}]);