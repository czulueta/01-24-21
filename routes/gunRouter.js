const express = require("express")
const gunRouter = express.Router()
const Gun = require("../models/gun.js")

// get all guns
gunRouter.get(("/", (req, res, next) => {
    Gun.find((err, guns) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(guns)
    })
}))
// post a gun
gunRouter.post(("/", (req, res, next) => {
    const newGun = new Gun(req.body)
    newGun.save((err, savedGun) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedGun)
    })
}))
module.exports = gunRouter