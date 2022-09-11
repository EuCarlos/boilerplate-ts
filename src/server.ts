import express from 'express';
import '@controllers/UsersController'
require("dotenv").config()

// import { json_response } from './concerns/response';
import { JsonResponse } from './concerns/response'

const PORT = process.env.PORT || 3333

const app = express();

app.get('/', (req, res) => {
    var result = new JsonResponse("Request Successfully", true, {
        name: "Carlos Alves",
        repo: "https://github.com/EuCarlos/boilerplate-ts",
        website: "https://carlosalves.vercel.app/"
    }).response()

    return res.status(200).json(result)
})

app.use((req, res) => {
    var result = new JsonResponse("Can't found this route", false).response()
    res.status(404).json(result);
});

app.listen(PORT, () => {
    console.log(`🔥 Server is running in PORT ${PORT} - ${process.env.NODE_ENV}`)
})
