
//#############################################################################################//
//###################################### proximasActividades ##################################//
//#############################################################################################//

arranque.controller('proximasActividades',function($scope,$http,$filter,$window){
    $http.get("http://www.ilazkitaldea.com/app/php/descripcion_actividades.php").then(function (response) {

      $scope.myData = response.data.records;

      console.log($scope.myData);

      $scope.comenzar=function(id_comenzar){
        filtro_actividades=id_comenzar;
        localStorage.setItem("filtro_actividades", filtro_actividades);
        console.log("clicado: "+filtro_actividades);
        $window.open("#/tab/actividadEspecifica", "_self");
      };

      $scope.atras=function(){

        console.log("borrado");

        var user = localStorage.getItem('user');
        localStorage.clear();
        localStorage.setItem('user',user);

        if(localStorage.getItem("user")) {
          console.log(localStorage.getItem('user'));
          $scope.link = "#/tab/homeregistrado.html";
        }else{
          console.log("nada")
          $scope.link = "#/tab/home.html"
        }
      };

  });
});

//#############################################################################################//
//###################################### actividadEspecifica ##################################//
//#############################################################################################//

arranque.controller('actividadEspecifica',function($scope,$http,$filter){
    $http.get("http://www.ilazkitaldea.com/app/php/descripcion_actividades.php").then(function (response) {
      if(localStorage.getItem("filtro_actividades")!=null){
        var filtro_actividades = localStorage.getItem("filtro_actividades");
      }else{
        filtro_actividades="";
      }

      $scope.myData = response.data.records;
      $scope.especifico = $filter('filter')($scope.myData, {id:filtro_actividades});

      console.log(filtro_actividades);
      console.log($scope.especifico);

      $scope.atras=function(){

        console.log("borrado");

        var user = localStorage.getItem('user');
        localStorage.clear();
        localStorage.setItem('user',user);

        if(localStorage.getItem("user")) {
          console.log(localStorage.getItem('user'));
          $scope.link = "#/tab/homeregistrado.html";
        }else{
          console.log("nada")
          $scope.link = "#/tab/home.html"
        }
      };

      $scope.contador=$scope.especifico[0].gustar;
      $scope.id=$scope.especifico[0].id;

      var contador=$scope.contador;
      contador=parseInt(contador);

      var id=$scope.id;
      id=parseInt(id);

      $scope.cargarcontador=function(){
          contador=contador+1;
          console.log(contador);
          $scope.contador=contador;
      };

      $scope.sendData=function(){
        console.log("enviados");

        Object.toparams = function ObjecttoParams(obj) {
          var p = [];
          for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
          }
          return p.join('&');
          };

          var req = {
              method: 'POST',
              url: "http://www.ilazkitaldea.com/app/php/guardar_corazon.php",
              data: {'gustar':contador,'id':id},
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          };

          $http(req).
          success(function(data, status, headers, config) 
          {
            console.log("ok");
          }).
          error(function(data, status, headers, config) 
          {
              console.log("error");
          });
      };

      $scope.apuntar=function(){
        console.log("enviados");

        user="aaaa";
        activity="aaaa";

        Object.toparams = function ObjecttoParams(obj) {
          var p = [];
          for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
          }
          return p.join('&');
          };

          var req = {
              method: 'POST',
              url: "http://www.ilazkitaldea.com/app/php/guardar_inscripcion.php",
              data: {'usuario':user,'actividad':activity},
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          };

          $http(req).
          success(function(data, status, headers, config) 
          {
            console.log("ok");
          }).
          error(function(data, status, headers, config) 
          {
              console.log("error");
          });
      };

  });
});

//#############################################################################################//
//###################################### cargaCorazon #########################################//
//#############################################################################################//

/*arranque.controller('cargaCorazon', function($scope,$http) {

      $scope.parseId=parseintcorazon;
      //$scope.cargarcontador=calcularcorazon;
      $scope.enviarcorazon=sendData;

});*/

//#############################################################################################//
//###################################### inicio ###############################################//
//#############################################################################################//

arranque.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
})

arranque.controller('homelogedcontrll', function($scope) {
  $scope.data=({'user':localStorage.getItem("user")});
})

//#############################################################################################//
//###################################### inicio ###############################################//
//#############################################################################################//

arranque.controller('LoginCtrl', function($scope,$http,$window) {
    
    $scope.data = {};
 
    $scope.login=function(){
        console.log("LOGIN user: " + $scope.data.username + " - PW: " + $scope.data.password);
       
        localStorage.setItem("user", $scope.data.username);
        localStorage.setItem("pw", $scope.data.password);

        console.log("enviados");

        Object.toparams = function ObjecttoParams(obj) {
          var p = [];
          for (var key in obj) {
              p.push(key + '=' + encodeURIComponent(obj[key]));
          }
          return p.join('&');
          };

          var req = {
              method: 'POST',
              url: "http://www.ilazkitaldea.com/app/php/comprobar_usuario.php",
              data: {'usuario':$scope.data.username,'contrasena':$scope.data.password},
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          };

          $http(req).
          success(function (data, status, headers, config) {
                $scope.respuesta = data; // assign  $scope.persons here as promise is resolved here 
                console.log($scope.respuesta);
                window.open("#/tab/homeregistrado", "_self");
            }).error(function (data, status, headers, config) {
                $scope.status = status;
                console.log($scope.persons);
            });


      };
})

//#############################################################################################//
//###################################### loged ################################################//
//#############################################################################################//

arranque.controller('loged', function() {

  
})