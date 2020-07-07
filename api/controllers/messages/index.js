const express = require('express');
const router = express.Router();
//referencia al servicio
const messagesModule = require('./../../services/messages');




router.route('/')
    .get ((req, res)=>{
        //llamado a leer tweets guardados
        res.send(messagesModule.loadMessages());
    })
    
    .post((req, res)=>{
        //crear el objeto que se va a guardar
        const message = {
            id: messagesModule.arrayLenght(),
            msg: req.body.msg,
            validateName: req.body.validateName,
            inputEmail4: req.body.inputEmail4
            
        };
        //llamado a crear tweets
        messagesModule.newMessage(message);
        res.status(200).send({message: 'El mensaje ha sido creado'});
    });

module.exports = router;