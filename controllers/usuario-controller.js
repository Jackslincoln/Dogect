const user_service = require('../service/usuario-service');
const express = require('express');
/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
async function readAllUsers(req, res){
    const users = await user_serivce.read();
    res.json(users);
}

async function readOne(req, res){
    const id = req.query.id;
    const user = await user_service.readOne(id);
    res.json(user);
}

module.exports = {
    readAllUsers,
    readOne
};