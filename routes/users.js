const express = require('express')
const router = express.Router();
const {listUsers, 
    listUserByID,
     addUser, 
     updateUser,
    deleteUser,
    signInUser,
     verifyToken} = require('../controllers/users');


router.get('/', listUsers);                      //get= // obtener////
router.get('/:id', listUserByID); //http://localhost:3000/api/v1/users/?
router.post('/', signInUser);                   
router.put('/', addUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/verify', verifyToken);



module.exports = router


//http://localhost:3000/api/v1/users
