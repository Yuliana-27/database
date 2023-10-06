const express = require('express')
const usersRouter = require('./routes/users')


class Server  {
    constructor(){
         this.app = express();
         this.port = 3000;


         //paths
         this.basePhat = '/api/v1';
         this.usersPath =  `${this.basePhath}/users`;

         this.middlewares();
         this.routes();

    }

    middlewares(){
        this.app.use(express.json());

    }

    routes(){
        this.app.use(this.usersPath, usersRouter);

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('listening on port ${this.port}')
        })
    }

}

module.exports = Server;






//http:localhost:3000/


