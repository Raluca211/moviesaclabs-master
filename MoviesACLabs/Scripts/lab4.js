var app = angular.module('Start', []);


app.controller('add', function ($scope) {

    $scope.todos = ['bhg', 'jhj'];
    $scope.todoList = "";
   

   
    $scope.addTodo = function () {
        $scope.todos.push($scope.todoList);
    }

    $scope.submit = function() {
        $scope.todos.push($scope.todoList);
        }
   


});
