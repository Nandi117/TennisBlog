const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tennisblog2025'
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tipus', (req, res) => {
    const sql=`SELECT * from tipus`
    pool.query(sql, (err, result) => {
        if (err){
          console.log(err)
          return res.status(500).json({error:"Hiba"})
        }
        console.log(result)
        return res.status(200).json(result)
    })
})

app.get('/blog', (req, res) => {
    const sql=`SELECT * from blog`
    pool.query(sql, (err, result) => {
        if (err){
          console.log(err)
          return res.status(500).json({error:"Hiba"})
        }
        console.log(result)
        return res.status(200).json(result)
    })
})


//lekerdezi a blog-tipus-t
app.get('/osszesAdat', (req, res) => {
    const sql=`
        select *
        FROM blog
        inner join tipus
        on blog.blog_tipus=tipus.tipus_id order by blog_datum desc;`
      pool.query(sql, (err, result) => {
        if (err){
          console.log(err)
          return res.status(500).json({error:"Hiba"})
        }
        if (result.length===0){
          return res.status(404).json({error:"Nem található adat!"})
        }

        console.log(result)
        return res.status(200).json(result)
    })
})

//új blog felvitele
app.post('/blogFelvitel', (req, res) => {
    const {blog_szoveg,blog_datum,blog_becenev,blog_tipus} =req.body
    const sql=`insert into blog values (null,?,?,?,?)`
    pool.query(sql,[blog_szoveg,blog_datum,blog_becenev,blog_tipus] , (err, result) => {
        if (err){
          console.log(err)
          return res.status(500).json({error:"Hiba"})
        }
        return res.status(201).json({message:"Sikeres felvitel!"})
    })
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



