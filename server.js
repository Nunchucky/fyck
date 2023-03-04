const express = require('express')
const app = express()
const cors = require('cors')
const {articleRouter } = require('./routes/article.routes')
const connect = require('./config')

app.use(cors())
app.use(connect)
app.use(express.json());
app.get("/", (_req, res) => {
    res.send("hiudbf")
})

app.get(articleRouter)

app.listen(3030 )