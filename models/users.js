const usersModel = {
getAll: `
   SELECT 
         *
      FROM
        users
`,
getByID:`
SELECT 
         *
      FROM
        users
        WHERE
            id=?
`,
getByUsername:`
SELECT 
         *
      FROM
        users
        WHERE
            username=?
`,
getByEmail:`
SELECT 
         *
      FROM
        users
        WHERE
            email=?
`,
addaRow: `
INSERT INTO 
users(
   username,
   password,
   email,
   name,
   lastname,
   phonenumber,
   role_id,
   is_active
  
)VALUES(
   ?, ?, ?, ?, ?, ?, ?, ?
)
`,
}


module.exports = usersModel;
