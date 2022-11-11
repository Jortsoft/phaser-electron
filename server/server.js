const express = require('express')
const app = express()
const port = 8080
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require("helmet");

//Middleweew
app.use(bodyParser.json())
app.use(cors())
app.use(helmet())

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})