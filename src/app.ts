import express, {Request, Response} from 'express'
import { Puerto } from './controllers/name.controller';
import PruebaRoute from './routes/controller.routes'


const app = express()


app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.use(PruebaRoute)
app.get('/', Puerto)

export default app