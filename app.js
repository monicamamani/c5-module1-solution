(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', function ($scope) {
  $scope.launch = "";
  $scope.resultMessage = "";

  $scope.checkEmpty = function (){
    if (  $scope.launch.length == 0){
      $scope.resultMessage = "Please enter data first";
    } else {
      var array = $scope.launch.split(',');      
      if (array.length <= 3){
        $scope.resultMessage = "Enjoy!";
      } else {
        $scope.resultMessage = "Too much!";
      }
    }
  };

});

})();
