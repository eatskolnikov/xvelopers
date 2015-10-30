app.controller("HomeCtrl", ["$scope", "$rootScope", "$window", "$sce", function($scope, $rootScope, $window, $sce)
{
  $scope.giveMeHtml = function(text){
    return $sce.trustAsHtml(text);
  };
  $scope.xvelopers = [
    {
      name: "Andrés PinedaX",
      description: "Tiene tanto dinero que la cantidad necesaria para contarlo requiere dos <a href='https://goo.gl/sWTkHd'>bigIntegers</a>.",
      image: "./assets/img/xvelopers/pinedax.jpg",
      links: [
        {name:"", icon:"uk-icon-facebook", url:"https://goo.gl/rZySlu"}
      ]
    },
    {
      name: "ClaudioX Sanchez",
      description: "Tiene tanto dinero que la cantidad necesaria para contarlo requiere dos <a href='https://goo.gl/sWTkHd'>bigIntegers</a>.",
      image: "./assets/img/xvelopers/claudiox.jpg",
      links: [
      //  {name:"", icon:"", url:""}
      ]
    },
    {
      name: "Diox",
      description: "Exiliado del gremio por nuestros pecados, fue el xveloper original.",
      image: "./assets/img/xvelopers/diox.png",
      links: [
      ]
    },
    {
      name: "Efrain ReyeX",
      description: "C# connoisseur extraordinaire.",
      image: "./assets/img/xvelopers/efrainreyex.jpg",
      links: [
      //  {name:"", icon:"", url:""}
      ]
    },
    {
      name: "Hector MinayaX",
      description: "Un día, aburrido, se le ocurrió darle al boton de 'nuevo grupo' en facebook y ahora estamos <a href='https://www.facebook.com/groups/devdominicanos/'>aquí</a>.",
      image: "./assets/img/xvelopers/hectorminayax.jpg",
      links: [
      //  {name:"", icon:"", url:""}
      ]
    },
    {
      name: "Jorge VargaX",
      description: "CEO de como 42 startups, entre ellas <a href='http://codemera.com/'>codemera</a>, <a href='http://coworking.do'>coworking</a> e <a href='http://www.imprimela.net'>imprimela</a>",
      image: "./assets/img/xvelopers/jorgevargax.jpg",
      links: [
      //  {name:"", icon:"", url:""}
      ]
    },
    {
      name: "Leonardo JimeneX",
      description: "CEO de <a href='http://codetiger.co/'>codetiger</a> y amante de los juegos mobiles.",
      image: "./assets/img/xvelopers/leonardox.jpg",
      links: [
      //  {name:"", icon:"", url:""}
      ]
    },
    {
      name: "Marco MarmolejoX",
      description: "Aficionado/Profesional del diseño de videojuegos. Hace lo posible cada día por mejorar <a href='https://www.facebook.com/groups/cddvorg/'>la industria de videojuegos en República Dominicana</a>.",
      image: "./assets/img/xvelopers/marcomarmolejox.jpg",
      links: [
      //  {name:"", icon:"", url:""}
      ]
    },
    {
      name: "Omar DuarteX",
      description: "El pana mas easy going, se fue para <a href='http://www.workinestonia.com/'>Estonía</a> con un trabajo remoto que se transformó en onsite.",
      image: "./assets/img/xvelopers/omarduartex.jpg",
      links: [
      //  {name:"", icon:"", url:""}
      ]
    },
    {
      name: "RaydeltoX Hernandez",
      description: "Fiel creyente de Blackberry y profesor de vocación, ha dado clases en todas las universidades y en sus tiempos libres escribe <a href='http://amzn.com/1785283839'>libros</a>.",
      image: "./assets/img/xvelopers/raydeltox.jpg",
      links: [
      //  {name:"", icon:"", url:""}
      ]
    },
    {
      name: "René OlivoX",
      description: "#LaVidaEnZen el más #vendezido, actualmente se la pasa de charla en charla y lo puedes encontrar en Bräu un día cualquiera en #chillax.",
      image: "./assets/img/xvelopers/renex.jpg",
      links: [
      //  {name:"", icon:"", url:""}
      ]
    },
    {
      name: "RiaX Hemmat",
      description: "Constantemente aboga por mejorar el mercado laboral de los desarrolladores por medio de su compañia <a href='http://www.bluecoding.com/'>bluecoding</a>.",
      image: "./assets/img/xvelopers/riazhermmatx.jpg",
      links: [
      //  {name:"", icon:"", url:""}
      ]
    },
    {
      name: "Rubens MariuzzoX",
      description: "Un pana bien, es tan bacano que cuando consiguió un trabajo remoto con <a href='http://x-team.com/'>X-TEAM</a> (not related to xvelopers), se mudó a Pedernales.",
      image: "./assets/img/xvelopers/rubensmariuzzox.jpg",
      links: [
      //  {name:"", icon:"", url:""}
      ]
    },
    {
      name: "VivianX Guillen",
      description: "Co-Fundadora de <a href='http://codetiger.co/'>codetiger</a>, se graduó de economía y se lo encontró demasiado aburrido, así que ahora trabaja en python. No le digas nada malo de <a href='http://getuikit.com/'>uikit</a>.",
      image: "./assets/img/xvelopers/vivianx.jpg",
      links: [
      //  {name:"", icon:"", url:""}
      ]
    }];
  }]);
