angular.module('starter.services', [])

.factory('PopService',function($ionicLoading,$timeout){
    return {
        showPop:function(text){
            $ionicLoading.show({
                template:text
            });
            $timeout(function(){
                $ionicLoading.hide()
            },1000)
        },
        showError:function(text){
            $ionicLoading.show({
                template:text
            });
            $timeout(function(){
                $ionicLoading.hide()
            },1000)
        }
    }
})
