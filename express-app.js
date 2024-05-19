const express = require('express');
const cors  = require('cors');
const { recipe } = require('./api');

module.exports = async (app, db) => {

    app.use(express.json());
    app.use(cors());
    
    recipe(app, db);
}