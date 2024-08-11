const dbConfig = require("../config/sql_connect");
const { Model, Sequelize, sqlSequelizeConnect } = dbConfig;
const operator = Sequelize.Op; // for sequelize operators

// CREATING A MODEL FOR THE USER TABLE (FUNCTION BASED)
const authModal = sqlSequelizeConnect.define("Auth", {
  name: { type: Sequelize.STRING, required: true },
  email: { type: Sequelize.STRING, required: true, unique: true, allowNull: false },
  password: { type: Sequelize.STRING, required: true, allowNull: false },
});

// SYNCHRONIZE THE MODEL WITH THE DATABASE
// USE THE FOLLOWING CODE TO CREATE THE USER TABLE IN THE DATABASE
// (async () => {
//   try {
//     await authModal.sync({ alter: true });
//     console.log("🚀 ~ User table has been created successfully!");
//   } catch (error) {
//     console.error("❌ ~ Error creating the User table:", error);
//   }
// })();

// EXPORTING THE USER MODEL
module.exports = authModal;