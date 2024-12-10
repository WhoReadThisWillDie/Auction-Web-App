import express from 'express'
import cors from 'cors'
import usersRouter from './routers/userRouter.js'
import laptopsRouter from './routers/laptopRouter.js'
import auctionRouter from "./routers/auctionRouter.js"

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(`Received ${req.method} for ${req.url}`);
    next()
})

app.use('/users', usersRouter)
app.use('/laptops', laptopsRouter)
app.use('/auctions', auctionRouter)

app.listen(PORT, (err) => {
    if (err) {
        console.log(`ERROR: ${err}`)
    }
    console.log(`Server is running at http://localhost:${PORT}`)
})