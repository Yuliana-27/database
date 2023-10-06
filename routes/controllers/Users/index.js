const {request, reponse} = require('express');

const listUsers = (req = request, res = response)  => {
    res.json({msg: "USERS"}) }


    module.exports = listUsers