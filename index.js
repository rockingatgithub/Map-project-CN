const express = require('express')
const app = express()
const Map = require('./model/map')
const PORT=8000

app.get('/fetchData', async (req, res) => {

    let res = fetch ();

    // 
    Map.create({
        longitude: arr2[0].geomerty.cooridnate
    })

})

app.listen(PORT, () => {
    console.log("Server running successfully!")
})