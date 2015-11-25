/**
 * Created by Adarsh on 7/24/15.
 */

myBasicAngularApplicationRoot.service("MyAppService",["MyAppFactory",function(MyAppFactory){

    function getMessageFromService(){
        console.log("MyAppService");
        return MyAppFactory.messageFactoryValue();
    }

    return{
        messageServiceValue: getMessageFromService
    };
}]);
