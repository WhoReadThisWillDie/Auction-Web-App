import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import usersRouter from './routers/userRouter.js'
import laptopsRouter from './routers/laptopRouter.js'
import auctionRouter from './routers/auctionRouter.js'
import tokensRouter from "./routers/tokenRouter.js"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({path: path.resolve(__dirname, '.env')})

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(`Received ${req.method} for ${req.url}`)
    next()
})

app.use('/users', usersRouter)
app.use('/tokens', tokensRouter)
app.use('/laptops', laptopsRouter)
app.use('/auctions', auctionRouter)

app.listen(PORT, (err) => {
    if (err) {
        console.log(`ERROR: ${err}`)
    }
    console.log(`Server is running at http://localhost:${PORT}`)
})