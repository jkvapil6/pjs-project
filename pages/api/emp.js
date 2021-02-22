

export default (req, res) => {
  
  const knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./db.db"
    }
  })

  const getEmployees = async () => {
    const emps = await knex('employee')
      .select("*")
    console.log(emps)
    knex.destroy()

    res.statusCode = 200
    res.json({ emps })
  }

  getEmployees()
} 
