var app = angular.module('myDirectives', []);

app.directive('dirPending', function(){
	return {
		restrict: "EA",	// End restrict
		scope: {
			request: "&",
			// something: "="
		},	// End scope
		link: function(scope, element, attrs){
			element.on('click', function(){
				scope.request().then(function(){
					element.css({"display":"inline"})
				});
				element.css({"display":"none"});
			})
		}	// End link
	}	// End return object
});	// End app.directive

// TODO: 
// CODE IN SPINNING GIF ON DATA LOADING


app.directive('dirNotify', function(){
	return {
		restrict: "EA",	// End restrict
		scope: {
			title: "=",
			body: "=",
			icon: "="
		},	// End scope
		link: function(scope, element, attrs){
			var Notification = window.Notification || window.mozNotification || window.webkitNotification;
			Notification.requestPermission(function(permission){
				console.log("Permission:", permission);
				console.log("Notification:", Notification);

				var newNote = new Notification("Hi there!", {body: 'I am here to talk about some shit!', icon: 'dfad.jpg'});
				console.log("What does this show?", newNote);
			});
			// console.log("Title", scope.title);

			// var titleInput = $('.titleInput').val();
			// var bodyInput = $('.bodyInput').val();
			// var iconInput = $('.iconInput').val();

			// console.log("Title", titleInput);

			element.on('click', function(titleInput, bodyInput, iconInput){
				console.log("Am I clicked?");
			})	// End element.on

		}	// End link

	}	// End return object

});	// End app.directive