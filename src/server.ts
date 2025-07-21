import express from 'express' 
import cors from 'cors'
import 'dotenv/config'
import router from './router'
import { connectDB } from './config/db'
import { corsConfig } from './config/cors'
import profileRoutes from './routes/profileRoutes'

connectDB()

const app = express()

// Cors
app.use(cors(corsConfig))

// Leer datos de formularios
app.use(express.json())

app.use('/', router)


// Ruta para obtener el perfil de un usuario por su handle
app.use('/profile', profileRoutes)
export default app