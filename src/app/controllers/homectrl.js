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
        description: "Exiliado del gremio por nuestros pecados, fue el xveloper original.",
        image: "./assets/img/xvelopers/diox.png",
        links: [
          {name:"LinkedIn", icon:"", url:""}
        ]
      },
    {
      name: "Efrain ReyeX",
      description: "C# connoisseur extraordinaire",
      image: "./assets/img/xvelopers/efrainreyex.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    },
    {
      name: "Jorge VargaX",
      description: "CEO de como 42 startups, entre ellas <a href='http://codemera.com/'>codemera</a>, <a href='http://coworking.do'>coworking</a> e <a href='http://www.imprimela.net'>imprimela</a>",
      image: "./assets/img/xvelopers/jorgevargax.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    },
    {
      name: "Leonardo JimeneX",
      description: "CEO de <a href='http://codetiger.co/'>codetiger</a>",
      image: "./assets/img/xvelopers/leonardox.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    },
    {
      name: "Marco MarmolejoX",
      description: "Hace lo posible cada día por mejorar la industria de videojuegos en República Dominicana",
      image: "./assets/img/xvelopers/marcomarmolejox.jpg",
      links: [
        {name:"LinkedIn", icon:"", url:""}
      ]
    },
    {
      name: "Raydelto HernandeX",
      description: "Fiel amante de Blackberry y profesor de vocación, ha dado clases en todas las universidades.",
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
      description: "Constantemente aboga por mejorar el mercado laboral de los desarrolladores a travez de su compañia <a href='http://www.bluecoding.com/'>bluecoding</a>",
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
