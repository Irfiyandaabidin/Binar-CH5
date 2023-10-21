const { User } = require("../models");
("use strict");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await User.bulkCreate(
      [
        {
          name: "irfi",
          age: 20,
          address: "pemalang",
          type: "superadmin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "yanda",
          age: 42,
          address: "jogja",
          type: "superadmin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "abidin",
          age: 20,
          address: "semarang",
          type: "superadmin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    ).then(function (newSuperadmin) {
      const saltRounds = 10;
      return queryInterface.bulkInsert("Auths", [
        {
          email: "irfi@gmail.com",
          password:
            "$2a$12$vioznQhUuIJhN1S57x6qoORCWDZ3WIrAyuW5fFmDb5xC.WD7s4KIC",
          confirmPassword:
            "$2a$12$vioznQhUuIJhN1S57x6qoORCWDZ3WIrAyuW5fFmDb5xC.WD7s4KIC",
          userId: newSuperadmin[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "yanda@gmail.com",
          password:
            "$$2a$12$vioznQhUuIJhN1S57x6qoORCWDZ3WIrAyuW5fFmDb5xC.WD7s4KIC",
          confirmPassword:
            "$$2a$12$vioznQhUuIJhN1S57x6qoORCWDZ3WIrAyuW5fFmDb5xC.WD7s4KIC",
          userId: newSuperadmin[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "abidin@gmail.com",
          password:
            "$2a$12$vioznQhUuIJhN1S57x6qoORCWDZ3WIrAyuW5fFmDb5xC.WD7s4KIC",
          confirmPassword:
            "$2a$12$vioznQhUuIJhN1S57x6qoORCWDZ3WIrAyuW5fFmDb5xC.WD7s4KIC",
          userId: newSuperadmin[2].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
