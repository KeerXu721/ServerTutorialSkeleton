const express = require("express");
const router = express.Router();
let Ship = require("../models/Ship");

/**
 * tell Express.js that when it receives a GET requit at the URl /getShip/, to do this code
 */
router.get("/getShip/name", function(req, res){
    //look up dowuments in MongoDB by name
    Ship.findOne({name: req.body.name}, function(error, doc){
        // If there was an error
        if(error){
            console.error("Error finding ship", error);
            res.status(500).send(error);
        }
        // If no ship with the given name is found
        else if(!dos){
            //return HTTP code 404
            console.error("Error finding ship", error);
            res.status(404),send(error);
        }
        else{
            res.send(doc);
        }
    });

});