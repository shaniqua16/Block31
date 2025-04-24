const express = require("express");
const app = express();
const port = 3000;
const pg = require("pg");
const client = new pg.Client("postgress://shaniquawhitley:@Bettyboo1@localhost/acme_hr_db");

const init = async () => {
    try {
        await client.connect();
        const SQL= `
        DROP TABLE IF EXISTS employees;
        CREATE TABLE employees ( 
            id SERIAL PRIMARY KEY,
            name VARCHAR (100) NOT NULL,
            is_admin BOOLEAN DEFAULT FALSE
        );
        INSERT INTO employees (name, is_admin) VALUES ('Harley', true);
        INSERT INTO employees (name) VALUES ('Harry');
        INSERT INTO employees (name) VALUES ('Jim');
        `;
        await client.query(SQL);
    await client.end();
    console.log("The database is seeded");
    } catch (error) {
        console.error(error);
    }
    
};

init();



