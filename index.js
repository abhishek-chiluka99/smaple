
const express = require('express')
const app = express()
const port =process.env.PORT || 3000

app.get('/', (req, res) => res.sendfile(__dirname+'/hello.html'))
app.use(express.static('smaple'))

app.listen(port, () => console.log('Example app listening on port ${port}!'))