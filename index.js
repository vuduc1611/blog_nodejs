const express = require('express')
// tai thu vien express trong node_modules goi ra
const app = express()
// instance doi tuong tra ve la app  
const port = 3000
// run chay cong nao

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// dinh nghia cac tuyen dg router 
// 

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})