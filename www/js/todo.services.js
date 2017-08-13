angular.module('todo.services', [])

.factory('Projects', function() {
	return {
		all: function() {
			var projectStr = window.localStorage['projects'];
			if (projectStr) {
				return angular.fromJson(projectStr);
			}
			return [];
		},
		
		save: function(projects) {
			window.localStorage['projects'] = angular.toJson(projects);
		},
		
		newProject: function(projectTitle) {
			return {
				title: projectTitle,
				tasks: []
			};
		}, 
		
		getLastActiveIndex: function() {
			return parseInt(window.localStorage['lastActiveProject']) || 0;
		},
		
		setLastActiveIndex: function(index) {
			window.localStorage['lastActiveProject'] = index;
		}
	}	
});