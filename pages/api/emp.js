

export default (req, res) => {
  
  // const knex = require('knex')({
  //   client: 'sqlite3',
  //   connection: {
  //     filename: "./db.db"
  //   }
  // })
  // process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
  
  // const conn = {
  //   host : 'ec2-52-209-134-160.eu-west-1.compute.amazonaws.com',
  //   user : 'pcutuxsqwymfiy',
  //   password : '769ea73d75fae6473c688023df31f238a0fae74d163b29e73453c03d907f1687',
  //   database : 'dbc9cqbl35v478',
  //   ssl: true,
  //   insecureAuth: true
  // }

    
  const conn = {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    ssl: true,
    // insecureAuth: true
  }


  const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: conn
  })

  const getEmployees = async () => {
    const emps = await knex.withSchema('public')
      .select("*")
      .from("Employee")

    console.log(emps)
    knex.destroy()

    res.statusCode = 200
    res.json({ emps })
  }

  getEmployees()
} 
