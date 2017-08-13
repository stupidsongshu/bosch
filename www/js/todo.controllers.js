angular.module('todo.controllers', [])

.controller('TodoCtrl', ['$scope', '$ionicModal', 'Projects', '$ionicSideMenuDelegate', '$timeout', 
	function($scope, $ionicModal, Projects, $ionicSideMenuDelegate, $timeout){
	
		$scope.projects = Projects.all();
		
		$scope.activeProject = $scope.projects[Projects.getLastActiveIndex()];
		
		$scope.newProject = function() {
			var projectTitle = prompt('Project Name');
			if (projectTitle) {
				createProject(projectTitle);
			}
		};
		
		$scope.selectProject = function(project, index) {
			$scope.activeProject = project;
			Projects.setLastActiveIndex(index);
			$ionicSideMenuDelegate.toggleLeft(false);
		}
		
		$scope.toggleProjects = function() {
			$ionicSideMenuDelegate.toggleLeft();
		}
		
		// utility function to create new project
		var createProject = function(projectTitle) {
			var newProject = Projects.newProject(projectTitle);
			$scope.projects.push(newProject);
			Projects.save($scope.projects);
			$scope.selectProject(newProject, $scope.projects.length-1);
		};
		
		$scope.tasks = [ {title: 'Sample task #1'} ];
		
		$ionicModal.fromTemplateUrl('new-task.html', function(modal) {
				$scope.taskModal = modal;
			}, {
				scope: $scope
			}
		);
		
		$scope.saveTask = function(task) {
			if (!$scope.activeProject || !task) {
				return;
			}
			
			$scope.activeProject.tasks.push({
				title: task.title
			});
			
			$scope.taskModal.hide();
			
			// Inefficient, but save all the projects
		    Projects.save($scope.projects);
			
			task.title = "";
		};
		
		$scope.newTask = function() {
			$scope.taskModal.show();
		};
		
		$scope.closeNewTask = function() {
			$scope.taskModal.hide();
		};
		
		// init first project
		$timeout(function() {
			if ($scope.projects.length == 0) {
				while(true) {
					var projectTitle = prompt('Please enter the first project title:');
					if (projectTitle) {
						createProject(projectTitle);
						break;
					}
				}
			}
		}, 1000);
	}
]);
