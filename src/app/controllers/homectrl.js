app.controller("HomeCtrl", ["$scope", "$rootScope", "$window", "$sce", function($scope, $rootScope, $window, $sce)
{
  $scope.giveMeHtml = function(text){
    return $sce.trustAsHtml(text);
  };
  $scope.xvelopers = [
    {
      name: "Andrés PinedaX",
      description: "Tiene tanto dinero que la cantidad necesaria para contarlo requiere dos <a href='https://goo.gl/sWTkHd'>bigIntegers</a>",
      image: "./assets/img/xvelopers/pinedax.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    },
      {
        name: "Diox",
        description: "Exiliado del gremio, fue el xveleloper original.",
        image: "./assets/img/xvelopers/diox.png",
        links: [
          {name:"LinkedIn", icon:"", url:""}
        ]
      },
    {
      name: "Efrain ReyeX",
      description: "",
      image: "./assets/img/xvelopers/efrainreyex.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    },
    {
      name: "Jorge VargaX",
      description: "",
      image: "./assets/img/xvelopers/jorgevargax.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    },
    {
      name: "Leonardo JimeneX",
      description: "",
      image: "./assets/img/xvelopers/leonardox.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    },
    {
      name: "Marco MarmolejoX",
      description: "",
      image: "./assets/img/xvelopers/marcomarmolejox.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    },
    {
      name: "Raydelto HernandeX",
      description: "",
      image: "./assets/img/xvelopers/raydeltox.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    },
    {
      name: "René OlivoX",
      description: "",
      image: "./assets/img/xvelopers/renex.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    },
    {
      name: "Riaz HemmatX",
      description: "",
      image: "./assets/img/xvelopers/riazhermmatx.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    },
    {
      name: "Rubens MariuzzoX",
      description: "",
      image: "./assets/img/xvelopers/rubensmariuzzox.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    },
    {
      name: "Victor RecioX",
      description: "",
      image: "./assets/img/xvelopers/victorx.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    },
    {
      name: "Vivian GuillenX",
      description: "",
      image: "./assets/img/xvelopers/vivianx.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    }];
  }]);
