var app = angular.module('anotherDirective', []);

app.directive('notify', function(){
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
				console.log("Permission ", permission);
				console.log("Notification ", Notification);
			});
			var newNote = new Notification(title, {body: '', icon: ''});
			console.log(newNote);

			element.on('click', function(){
				scope.title = newNote.title;
				scope.body = newNote.body;
				scope.icon = newNote.icon;

			})	// End element.on

		}	// End link

	}	// End return object

});	// End app.directive