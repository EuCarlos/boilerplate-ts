const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')

import JsonResponse from '../../concerns/response'

router
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())

    .get('/', (req, res) => {
        var result = JsonResponse.response("Request Successfully", true, {
            name: "Carlos Alves",
            repo: "https://github.com/EuCarlos/boilerplate-ts",
            website: "https://carlosalves.vercel.app/"
        })

        return res.status(200).json(result)
    })

    .post('/', (req, res) => {
        var result = JsonResponse.response("Request Successfully", true, req.body)
        res.status(201).json(result)
    })

module.exports = router
