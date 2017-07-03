'use strict';
angular.module('todoListApp')
	.service('dataService', function($http){ //Dependency Injection: http provider 
		this.helloConsole = function(){
			console.log("Hello Service!");
		}
		
		this.getTodos = function(callback){
			$http.get('mock/todos.json')
			.then(callback)};
		
		this.deleteTodo = function(todo){
			console.log(todo.name + " todo was delted!");
			//TODO: jw - other logic for angular services 
		};
		
		this.saveTodos = function(todos){
			console.log("The "+todos.length + " todos have been saved!");
			//TODO: jw - other logic for angular services 
		};
	}
	)