const geocode = require('./utils/geocode')

geocode('Sheffield', (error, data) => {
    console.log(data)
})