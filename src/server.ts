// imports
import express from 'express'
require("dotenv").config()

// controllers
import '@controllers/UsersController'

// routes
const v1Router = require('./routes/v1')

import { JsonResponse } from './concerns/response'

const PORT = process.env.PORT || 3333

const app = express();

app
    .use('/api/v1/workouts', v1Router)

    .use((req, res) => {
        const pathname = req.originalUrl
        const result = new JsonResponse(`Can't found this route: ${pathname}`, false).response()

        res.status(404).json(result);
    })

    .listen(PORT, () => {
        console.log(`🔥 Server is running in PORT ${PORT} - ${process.env.NODE_ENV}`)
    })
