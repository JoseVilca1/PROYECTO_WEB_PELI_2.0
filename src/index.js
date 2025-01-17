import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'
import indexRoutes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)



app.get('/',(req,res)=> res.render('index'))
app.listen(3000)
console.log('Server listening on por',3000)