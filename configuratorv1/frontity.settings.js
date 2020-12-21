const settings = {
  "name": "configuratorv1",
  "state": {
    "frontity": {
      "url": "http://desa3.ilos.es/",
      "title": "Configurador",
      "description": "Módulo configurador para RóTULOS CARACTER"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Configurador",
              "/configurator"
            ],
            [
              "Salir",
              "/exit"
            ]            
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "http://www.gofioteam.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
