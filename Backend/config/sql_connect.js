// CONNECTION TO MYSQL DATABASE USING MYSQL2/PROMISE AND SEQUELIZE
const mysql = require("mysql2/promise");
const { Sequelize, Model, DataTypes } = require("sequelize");

// Use environment variables or fallback to config file values
const SQL_DB = process.env.SQL_DB;
const SQL_USER = process.env.SQL_USER;
const SQL_PASSWORD = process.env.SQL_PASSWORD;
const SQL_HOST = process.env.SQL_HOST;
const SQL_PORT = process.env.SQL_PORT || 3306; // Default MySQL port if not specified
const SQL_DIALECT = process.env.SQL_DIALECT;

// Creating a object to connect to the MySQL database
const sqlSequelizeConnect = new Sequelize(SQL_DB, SQL_USER, SQL_PASSWORD, {
  host: SQL_HOST,
  dialect: SQL_DIALECT,
  port: SQL_PORT,
});

// Function to establish the connection and log a success message
const initializeDatabase = async () => {
  try {
    await sqlSequelizeConnect.authenticate();
    console.log("MySQL Database Connected ✅");
  } catch (error) {
    console.error("❌ ~ Unable to connect to the database:", error);
  }
};

// Initialize the database connection
initializeDatabase();

// Exporting the connection to the MySQL database
module.exports = {
  Model,
  Sequelize,
  DataTypes,
  sqlSequelizeConnect,
};
