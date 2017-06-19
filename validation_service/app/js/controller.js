'use strict';

/* Controllers */
var testApp = angular.module('testApp');

testApp.controller('HomeCtrl', ['$scope', '$rootScope', '$http', '$location', "ScientificModelRest", "ValidationTestDefinitionRest",
    function($scope, $rootScope, $http, $location, ScientificModelRest,ValidationTestDefinitionRest) {
        // $scope.init = function(tests, models) {
        //     $scope.tests = tests;
        //     $scope.models = models;
        // };

        $scope.models = ScientificModelRest.get({}, function(data){ });
        $scope.tests = ValidationTestDefinitionRest.get({}, function(data){ });      

    }
]);

testApp.controller('ValTestCtrl', ['$scope', '$rootScope', '$http', '$location', 'ValidationTestDefinitionRest',
    function($scope, $rootScope, $http, $location, ValidationTestDefinitionRest) {
        $scope.test_list = ValidationTestDefinitionRest.get({}, function(data){});
    }
]);

testApp.controller('ValTestDetailCtrl', ['$scope', '$rootScope', '$http', '$location', '$stateParams', 'ValidationTestDefinitionRest',
    function($scope, $rootScope, $http, $location, $stateParams, ValidationTestDefinitionRest) {
        $scope.detail_test = ValidationTestDefinitionRest.get({id: $stateParams.uuid}, function(data){});
    }
]);

testApp.controller('TestResultCtrl', ['$scope', '$rootScope', '$http', '$location',
    function($scope, $rootScope, $http, $location) {}
]);




//Model catalog
var ModelCatalogApp = angular.module('ModelCatalogApp');

ModelCatalogApp.controller('ModelCatalogCtrl', ['$scope', '$rootScope', '$http', '$location',
    function($scope, $rootScope, $http, $location) {
    
    
    }
]);

ModelCatalogApp.controller('ModelCatalogCreateCtrl', ['$scope', '$rootScope', '$http', '$location',
    function($scope, $rootScope, $http, $location) { 
    $scope.species = [
      {id: 'mouse', name: 'Mouse (Mus musculus)'},
      {id: 'rat', name: 'Rat (Rattus rattus)'},
      {id: 'marmoset', name: 'Marmoset (callithrix jacchus)'},
      {id: 'human', name: 'Human (Homo sapiens)'},
      {id: 'rhesus_monkey', name: 'Paxinos Rhesus Monkey (Macaca mulatta)'},
      {id: 'opossum', name: 'Opossum (Monodelphis domestica)'},
      {id: 'other', name: 'Other'},
    ];

     $scope.brain_region = [
      {id: 'basal ganglia', name: 'Basal Ganglia'},
      {id: 'cerebellum', name: 'Cerebellum'},
      {id: 'cortex', name: 'Cortex'},
      {id: 'hippocampus', name: 'Hippocampus'},
      {id: 'other', name: 'Other'},
    ];

    $scope.cell_type = [
      {id: 'granule cell', name: 'Granule Cell'},
      {id: 'interneuron', name: 'Interneuron'},
      {id: 'pyramidal cell', name: 'Pyramidal Cell'},
      {id: 'other', name: 'Other'},
    ];

    $scope.model_type = [
      {id: 'single_cell', name: 'Single Cell'},
      {id: 'network', name: 'Network'},
      {id: 'mean_field', name: 'Mean Field'},
      {id: 'other', name: 'Other'},
    ];

    $scope.saveModel = function() {
        alert('yep')
        var parameter = JSON.stringify({model:$scope.model, model_instance:$scope.model_instance, model_image:$scope.model_image});
    $http.post("#/getModels/", parameter).
    success(function(data, status, headers, config) {
        alert(data);
      }).
      error(function(data, status, headers, config) {
      });

    }
}
    
]);

ModelCatalogApp.controller('ModelCatalogVersionCtrl', ['$scope', '$rootScope', '$http', '$location',
    function($scope, $rootScope, $http, $location) {
    

    }
]);
