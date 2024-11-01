import express from 'express'
import mongoose from 'mongoose'

const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String
}))

const app = express()

mongoose.connect('mongodb://mongoadmin:secret@localhost:27017/miapp?authSource=admin')

app.get('/', async (_req, res) => {
  console.log('listando..')
  const animales = await Animal.find()
  return res.send(animales)
})

app.get ('/crear', async (_req, res) => {
  console.log('creando..')
    await Animal.create({tipo: "perro", estado: 'En depresion crónica'})
    return res.send('ok')
  
})

app.listen(3001, ()=> console.log('listening..'))