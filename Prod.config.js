const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://res.windsurfercrs.com/ibe/index.aspx?hotelID=14474&lang=en-us&currID=1"
    
    },
    env:{
      username: "testing prod"
    }
  })
