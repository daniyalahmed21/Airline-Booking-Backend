"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Airports", {
      fields: ["cityId"],
      type: "foreign key",
      name: "fk_airport_city", // custom name for the foreign key constraint
      references: {
        table: "Cities",
        field: "id",
      },
      onDelete: "CASCADE", // if a city is deleted, its airports will be deleted as well
      onUpdate: "CASCADE", // if a city's id is updated, update it in the airports table as well
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Airports", "fk_airport_city");
  },
};
