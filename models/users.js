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
addRow: `
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

updateRow: `
UPDATE   users
SET 
   username = ?,
   password = ?,
   email = ?,
   name = ?,
   lastname = ?,
   phonenumber = ?,
   role_id = ?,
   is_active = ?

WHERE
   id=?
`,

deleteRow:`

UPDATE 
    users
 SET
    is_active=0
   WHERE
       id=?


`,



}


module.exports = usersModel;
