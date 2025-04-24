// imports here for express and pg

// static routes here (you only need these for deployment)
 
// app routes here

// create your init function

// init function invocation
const express = require("express");
const app = express();
const pg = require("pg");
const PORT = 3000;
const client = new pg.Client("postgresql://shaniquawhitley:@Bettyboo1@localhost:5432/acme_notes_db?schema=public");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`I am listening on port number ${PORT}`);
  });

  app.use((error, req,res,next)=> {
    res.status(res.status || 500).send({
        error: error
    })
    }
    );

  app.get("/api/employees", async (req, res,next) => {
    try {
        const SQL= `
        SELECT * FROM employees
        `;
    } catch (error) {
      console.error(error);
    }
  })

  const init = async () => {
    try {
        await client.connect();
    }catch (error) {
        console.error(error);
    };
}
   init(); 