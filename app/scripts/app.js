angular.module("todoApp", [])
    .controller("mainCtrl", function ($scope) {
        $scope.todos = [];
        //{
        //    text:"Todo 1",
        //    completed:false
        //},
        //{
        //    text:"Todo 2",
        //    completed:false
        //},
        //{
        //    text:"Todo 3",
        //    completed:false
        //},
        //{
        //    text:"Todo 4",
        //    completed:false
        //}
        //];

        $scope.add = function () {
            $scope.todos.push($scope.newTodo);
            $scope.newTodo = {};
        };

        $scope.delete = function (item) {
            $scope.todos.splice($scope.todos.indexOf(item), 1);
        };

        $scope.clearCompleted = function() {
          for (var index=$scope.todos.length-1; index>=0; index--){
              if ($scope.todos[index].completed == true){
                  $scope.todos.splice(index,1);
              }
          }
        };
    });
