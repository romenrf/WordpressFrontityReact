const settings = {
  "name": "configuratorv1",
  "state": {
    "frontity": {
      "url": "http://www.gofioteam.com",
      "title": "Configurador GOFIOTEAM",
      "description": "GOFIOTEAM-Lab WordPress for Frontity development"
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
