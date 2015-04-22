var app = angular.module('directiveWorkshop', ['myDirectives']);

app.controller('mainCtrl', function($scope, mainService){
	$scope.getData = function () {
        return mainService.getData($scope.query).then(function (data) {
           console.log(data);
           return $scope.data = data;
        });
    };	// End $scope.getData


    
    $scope.pushTitle = function(titleInput){
    	var title = $('.titleInput').val();
    	return title;

    }; 	// End $scope.pushTitle
    $scope.pushBody = function(bodyInput){
    	var body = $('.bodyInput').val();
    	return body;

    }; 	// End $scope.pushBody
    $scope.pushIcon = function(iconInput){
    	var icon = $('.iconInput').val();
    	return icon;

    }; 	// End $scope.pushIcon

});