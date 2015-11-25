/**
 * Created by Adarsh on 7/24/15.
 */
myBasicAngularApplicationRoot.factory("MyAppFactory" , [ function(){

    var messageVar = "Welcome To Application";

    function getMessageFromFactory() {
        console.log("MyAppFactory");
        return messageVar;
    }

    return {
        messageFactoryValue: getMessageFromFactory
    };
}]);
