/**
 * Created by Adarsh on 7/24/15.
 */
myBasicAngularApplicationRoot.controller("MyAppController", [ "$scope" , "MyAppService" , function($scope , MyAppService) {
    console.log("MyAppController");
    $scope.applicationMsg = angular.uppercase(MyAppService.messageServiceValue());
}]);