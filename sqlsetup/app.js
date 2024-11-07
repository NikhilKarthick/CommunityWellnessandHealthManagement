import express from 'express'
import cors from 'cors'
import { participate }  from './database.js'

const app = express()
app.use(express.json())

app.use(cors({
    origin:"*",
    credentials: true
}))
app.post("/api/register", async (req,res) => {
    participate(req,res)
    
    return res
    .json({"success":true})
})


app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
    
})

app.listen(8080,()=>{
    console.log('Server is running on port 8080')
})
