const express = require("express")
const cors = require("cors")
require("./db/config")
const User = require("./db/User")

const app = express()
app.use(express.json())
app.use(cors())

app.post("/register", async (req, resp) => {
  const user = new User(req.body)
  const result = await user.save()  //inserting data in DB
  resp.send(result)
})

app.listen(5000)

