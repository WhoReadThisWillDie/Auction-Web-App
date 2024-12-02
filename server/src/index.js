import express from 'express'
import cors from 'cors'
import usersRouter from './routers/userRouter.js'
import bidsRouter from './routers/bidRouter.js'
import laptopsRouter from './routers/laptopRouter.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.use('/users', usersRouter)
app.use('/bids', bidsRouter)
app.use('/laptops', laptopsRouter)

app.use((req, res, next) => {
    console.log(`Received ${req.method} for ${req.url}`);
    next()
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(`ERROR: ${err}`)
    }
    console.log(`Server started at port ${PORT}`)
})