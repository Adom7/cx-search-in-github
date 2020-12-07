const express= require ('express')

const app = express()

app.get('/', (req,res) =>{
    res.json({
        hello:'From Pokedex API'
    })
})

app.listen(4242, ()=>{
    console.log('Server is listening on port 4242 ')
})