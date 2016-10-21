arranque

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    ////////////////////////////////////

    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          //controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.homeregistrado', {
      url: "/homeregistrado",
      views: {
        'home-tab': {
          templateUrl: "templates/homeregistrado.html",
        }
      }
    })

    ///////////////////////////////////

    .state('tabs.proximasActividades', {
      cache: false,
      url: "/proximasActividades",
      views: {
        'home-tab': {
          templateUrl: "templates/proximasActividades.html"
        }
      }
    })
    .state('tabs.actividadEspecifica', {
      cache: false,
      url: "/actividadEspecifica",
      views: {
        'home-tab': {
          templateUrl: "templates/actividadEspecifica.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "templates/about.html"
        }
      }
    })
    /*
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })
    */
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });

  if(localStorage.getItem("user")) {
    $urlRouterProvider.otherwise("/tab/homeregistrado");
  }else{
    $urlRouterProvider.otherwise("/tab/home");
  }

})

.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
})