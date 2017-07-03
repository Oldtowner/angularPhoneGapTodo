angular.module('todoListApp')
.directive('todos', function(){
	return{
		templateUrl: 'templates/todos.html', //this is an object, the directive itself
		controller: 'mainCtrl',
		replace: true //angular injects tempalte into todo tag, wont be seen in inspectors
	}	
}
)