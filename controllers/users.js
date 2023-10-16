const {request, reponse} = require('express');
const usersModel = require('../models/users');
const pool = require('../DB');
//1//
const listUsers = async(req = request, res = response)  => {
let conn;
try {
    conn = await pool.getConnection();

    const users = await conn.query(usersModel.getAll, (err) => {
        if (err) {
            throw err;
            
        }
    })    
    res.json(users)
} 
catch (error) {
    console.log(error);
    res.status(500).json(error);

} finally{
    if(conn)
    {conn.end();}
}
}
//2//
const listUserByID = async(req = request, res = response)  => {
    const {id}=req.params;
    let conn; 

    if (isNaN(id)) {   //cuando no es un número//
        res.status(400).json({msg: `THE ID - IS INVALID`});    //mostrata este mensaje cuando se tecleé un carácter en vez de un munero// 
        return;
        
    }
    
    try {
        conn = await pool.getConnection();
    
        const [user] = await conn.query(usersModel.getByID, [id], (err) => {    //consulta de los registro en nuestra base de datos//
            if (err) {
                throw err;
                
            }
        })

        if (!user) {
            res.status(404).json({msg: `USER WITH ID ${id} NOT FOUND`});     //mostrata este mensaje cuando se tecleé un numero en vez de un carácter// 
            return;
        }

        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    
    } finally{
        if(conn)
        {conn.end();}
    }
    }

    //Nuevo EndPoint 3//



    const addUser=async(req = request, res = response) => {
        const {
            username,
            password,
            email,
            name,
            lastname,
            phonenumber= '',
            role_id,
            is_active= 1
        } = req.body;

        if (!username || !password || !email || !name || !lastname || !role_id) {
            res.status(400).json({msg: 'MISSING INFORMATION'});
            return;
        }

        const user =[username, password, email, name, lastname, phonenumber, role_id, is_active]
        let conn;

        try {
            conn = await pool.getConnection();

            const [usernameExists] = await conn.query(usersModel.getByUsername, [username], (err) => {
                if (err) throw err;
                })
                if (usernameExists) {
                    res.status(409).json({msg: 'Username ${username} already exists'});
                    return;
                   }

            const [emailExists] = await conn.query(usersModel.getByEmail, [email], (err) => {
                  if (err) throw err;
                 })
                  if (emailExists) {
                      res.status(409).json({msg: 'Email ${email} already exists'});
                     return;
                       }



            const userAdded = await conn.query(usersModel.addRow, [...user], (err) => {
                if (err) throw err;
                })
                if (userAdd.affecteRows === 0){
                    throw new Error('User not added')
                }                                                     //validacion de un nuevo endpoint//
                res.json({msg: 'USER ADDED SECCESFULLY'});        
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
            return;
        }finally{
            
            if(conn)conn.end();
            
        }
    }
    
    module.exports = {listUsers, listUserByID, addUser}


  //rutas    - controllers    -     models(BD) //
    