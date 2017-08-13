angular.module('starter.controllers', ['ionic'])
    .constant('ApiEndpoint', {
        // url: 'http://localhost:8080/fengkong-server/',
        url: 'http://www.techwells.com/fengkong-server/',
        wxOAuthUrl: 'http://www.techwells.com/fengkong-living-h5'
    })
    .controller('TabCtrl', function ($scope, $rootScope, $state) {
        // 隐藏tabs
        $rootScope.$on('$ionicView.beforeEnter', function () {
            var statename = $state.current.name;
            //tabs中存在的主页面不需要隐藏，hidetabs=false
            if (statename === 'tabs.home' || statename === 'tabs.sort' || statename === 'tabs.scancode' || statename === 'tabs.cart' || statename === 'tabs.center') {
                $rootScope.hideTabs = false;
            } else {
                $rootScope.hideTabs = true;
            }
        })


        $scope.goHome = function () {
            $state.go("tabs.home");
        }
        $scope.goSort = function () {
            $state.go("tabs.sort");
        }
        $scope.goScanCode = function () {
            $state.go("tabs.scancode");
        }
        $scope.goCart = function () {
            $state.go('tabs.cart');
        }
        $scope.goCenter = function(){
            $state.go("tabs.center");
        }

    })

    // 首页
    .controller('HomeCtrl', ['$scope', function ($scope) {

    }])

    // 搜索
    .controller('SearchCtrl', ['$scope', function ($scope) {
        $scope.back = function () {
            window.history.go(-1);
        }
    }])

    // 搜索结果
    .controller('SearchResultCtrl', ['$scope', function ($scope) {
        $scope.back = function () {
            window.history.go(-1);
        }
    }])

    // 我的消息
    .controller('MessageCtrl', ['$scope', function ($scope) {
        $scope.back = function () {
            window.history.go(-1);
        }
    }])

    // 系统消息
    .controller('MessageSystemCtrl', ['$scope', function ($scope) {
        $scope.back = function () {
            window.history.go(-1);
        }
    }])

    // 通知消息
    .controller('MessageNoticeCtrl', ['$scope', function ($scope) {
        $scope.back = function () {
            window.history.go(-1);
        }
    }])

    // 卡券详情
    .controller('CouponCtrl', ['$scope', function ($scope) {
        $scope.back = function () {
            window.history.go(-1);
        }
    }])

    .directive('shadowMask', function () {
        return {
            restrict: 'E',
            scope: {

            },
            replace: true,
            templateUrl: 'templates/shadow-mask.html',
            link: function (scope, iElement, iAttrs) {

            },
            controller: function ($scope, $element, $attrs) {
                this.flag = false;
                this.show = function () {
                    $($element).fadeIn(1000);
                    this.flag = true;
                }
                this.hide = function () {
                    $($element).fadeOut(1000);
                    this.flag = false;
                }
            },
            controllerAs:'shadowMaskCtrl'
        }
    })

    .directive('sortNav', function () {
        return {
            restrict: 'E',
            replace: true,
            require: '?^shadowMaskCtrl',
            template: '  <div class="row sort-nav">\
                            <div class="col-80 sort-nav-l">\
                                <span class="sort-nav-title themecolor" ng-click="sortAll()">全部分类</span>\
                            </div>\
                            <div class="col-20 sort-nav-r" ng-click="action()">\
                                <img src="img/sort/promotion-icon@2x.png">\
                            </div>\
                        </div>',
            link: function (scope, elm, attrs, ctrl) {
                console.log(ctrl)
            }
        }
    })

    // 分类
    .controller('SortCtrl', ['$scope', '$ionicBackdrop', '$timeout', function ($scope, $ionicBackdrop, $timeout) {
        $scope.back = function () {
            window.history.go(-1);
        }

        var shadowMaskModalWrapper = false;
        $scope.sortAll = function(){
            if(!shadowMaskModalWrapper){
                $('.shadow-mask-modal-wrapper').height($(window).height()).slideDown();
                shadowMaskModalWrapper = true;
            }else{
                $('.shadow-mask-modal-wrapper').height($(window).height()).slideUp();
                shadowMaskModalWrapper = false;
            }
        }

    }])

    // 商品详情
    .controller('GoodsDetailCtrl', ['$scope', function ($scope) {
        $scope.back = function () {
            window.history.go(-1);
        }
    }])

    // 秒杀活动
    .controller('SeckillCtrl', ['$scope', function ($scope) {
        $scope.back = function () {
            window.history.go(-1);
        }

        var swiper = new Swiper('.seckill-nav-container', {
            spaceBetween: 0,
            slidesPerView: 5,
            centeredSlides: false,
            slideToClickedSlide: true,
            grabCursor: true,
            
            history: 'slide',
        });
    }])

    // 秒杀详情
    .controller('SeckillDetailCtrl', ['$scope', function ($scope) {
        $scope.back = function () {
            window.history.go(-1);
        }
    }])

    // 签到
    .controller('SignInCtrl', ['$scope','$ionicPopup','$ionicBackdrop','$timeout', function ($scope,$ionicPopup,$ionicBackdrop,$timeout) {
        $scope.back = function () {
            window.history.go(-1);
        }

        $scope.signIn = function(){
            $ionicBackdrop.retain();

            $('.sign-modal').fadeIn(100);

            $timeout(function() {
                $ionicBackdrop.release();
                $('.sign-modal').fadeOut(100);
            }, 1500);
        }
    }])

    // 创建订单
    .controller('OrderCreateCtrl', ['$scope', function ($scope) {
        $scope.back = function () {
            window.history.go(-1);
        }
    }])

    // 购物车
    .controller('CartCtrl', ['$scope', function ($scope) {
        $scope.back = function () {
            window.history.go(-1);
        }
    }])