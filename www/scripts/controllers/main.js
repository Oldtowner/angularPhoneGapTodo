'use strict';
angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;
  
  $scope.addTodo = function(){
	  var todo = {name: "This is a new todo."};
	  $scope.todos.unshift(todo);
  };
  
  dataService.getTodos(
	function(response){
		//console.log(response.data);
		$scope.todos = response.data;
	});
  $scope.deleteTodo = function(todo, index){
	  dataService.deleteTodo(todo);
	  $scope.todos.splice(index, 1);
  }; 
  $scope.saveTodos= function(){
      var filteredTodos = $scope.todos.filter(function(todo){
          if(todo.edited){ 
              return todo;
          }
      });
	  dataService.saveTodos(filteredTodos);	  
  };
})

.controller('coolCtrl', function($scope){
	$scope.whoAmI = function(){
		console.log("coolCtrl function scope");
	};
	$scope.helloWorld = function(){
		console.log("This is not ttheeee the main, but hello World");
	};
})
.controller('imASibling', function($scope){
	$scope.foobar =1234;
})
;