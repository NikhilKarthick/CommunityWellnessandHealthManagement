import express from 'express'
import { getNotes, getNote, createNote }  from './database.js'

const app = express()
app.use(express.json())

app.post("/api/register", async (req,res) => {
    const {username,email,password} = req.body

    console.log(username,email,password);

    if(!(username&&email&&password)){
        console.log(`Field not entered!`);
        return res.send(`Field not entered!`)
    }
    
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
