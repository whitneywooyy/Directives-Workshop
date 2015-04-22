var app = angular.module('myDirectives', []);

app.directive('dirPending', function(){
	return {
		restrict: "EA",	// End restrict
		scope: {
			request: "&"
			// something: "="
		},	// End scope
		template: "<button ng-show='!spinner'>Submit</button><img ng-show='spinner' src='giphy.gif' />",
		link: function(scope, element, attrs){
			element.on('click', function(){
				scope.spinner = true;
				scope.request().then(function(){
					scope.spinner = false;
					element.css({"display":"inline"})
				});
				element.css({"display":"none"});
			})
		}	// End link
	}	// End return object
});	// End app.directive


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
			});

			element.on('click', function(){
				var newNote = new Notification(scope.title, {body: scope.body, icon: scope.icon});
				console.log("What does this show?", newNote);
				console.log("Am I clicked?");

				newNote.onShow = function(){
					setTimeout(newNote.close.bind(newNote), 5000);
				};
			})	// End element.on

		}	// End link

	}	// End return object

});	// End app.directive