// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('bottom');
        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('center');
        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            // setup an abstract state for the tabs directive
            .state('tabs', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html',
                controller: 'TabCtrl'
            })

            // 首页
            .state('tabs.home', {
                url: "/home",
                cache: 'false',
                views: {
                    'tab-home': {
                        templateUrl: "templates/home/home.html",
                        controller: "HomeCtrl"
                    }
                }
            })

            // 搜索
            .state('tabs.search', {
                url: "/search",
                cache: 'false',
                views: {
                    'tab-home': {
                        templateUrl: "templates/home/search.html",
                        controller: 'SearchCtrl'
                    }
                }
            })

            // 搜索结果
            .state('searchResult', {
                url: "/searchResult",
                cache: 'false',
                templateUrl: "templates/home/search-result.html",
                controller: 'SearchResultCtrl'
            })

            // 我的消息
            .state('message', {
                url: "/message",
                cache: 'false',
                templateUrl: "templates/home/message.html",
                controller: 'MessageCtrl'
            })

            // 系统消息
            .state('messageSystem', {
                url: "/messageSystem",
                cache: 'false',
                templateUrl: "templates/home/message-system.html",
                controller: 'MessageSystemCtrl'
            })

            // 通知消息
            .state('messageNotice', {
                url: "/messageNotice",
                cache: 'false',
                templateUrl: "templates/home/message-notice.html",
                controller: 'MessageNoticeCtrl'
            })

            // 卡券详情
            .state('coupon', {
                url: "/coupon",
                cache: 'false',
                templateUrl: "templates/home/coupon.html",
                controller: 'CouponCtrl'
            })

            // 分类
            .state('tabs.sort', {
                url: "/sort",
                cache: 'false',
                views: {
                    'tab-sort': {
                        templateUrl: "templates/sort/sort.html",
                        controller: "SortCtrl"
                    }
                }
            })

            // 商品详情
            .state('goodsDetail', {
                url: "/goodsDetail",
                cache: 'false',
                templateUrl: "templates/sort/goods-detail.html",
                controller: 'GoodsDetailCtrl'
            })

            // 秒杀活动
            .state('seckill', {
                url: "/seckill",
                cache: 'false',
                templateUrl: "templates/sort/seckill.html",
                controller: 'SeckillCtrl'
            })

            // 秒杀详情
            .state('seckillDetail', {
                url: "/seckillDetail",
                cache: 'false',
                templateUrl: "templates/sort/seckill-detail.html",
                controller: 'SeckillDetailCtrl'
            })

            // 签到
            .state('signIn', {
                url: "/signIn",
                cache: 'false',
                templateUrl: "templates/cart/sign-in.html",
                controller: 'SignInCtrl'
            })

            // 创建订单
            .state('orderCreate', {
                url: "/orderCreate",
                cache: 'false',
                templateUrl: "templates/cart/order-create.html",
                controller: 'OrderCreateCtrl'
            })

            // 购物车
            .state('tabs.cart', {
                url: "/cart",
                cache: 'false',
                views: {
                    'tab-cart': {
                        templateUrl: "templates/cart/cart.html",
                        controller: "CartCtrl"
                    }
                }
            })
           

        $urlRouterProvider.otherwise('/tab/home');
    });