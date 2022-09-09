import express from 'express';
import '@controllers/UsersController'
require("dotenv").config()

// import { json_response } from './concerns/response';

const PORT = process.env.PORT || 3333

const app = express();

app.get('/', (req, res) => {
    // return res.json(json_response("Request Successfully", true, {})
    return res.json({
        message: "Request Successfully",
        is_sucess: true,
        data: {
            name: "Carlos Alves",
            repo: "https://github.com/EuCarlos/boilerplate-ts",
            website: "https://carlosalves.vercel.app/"
        }
    })
})

app.listen(PORT, () => {
    console.log(`🔥 Server is running in PORT ${PORT} - ${process.env.NODE_ENV}`)
})