/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    /**
     * Adding seed data for Airplane table.
     */
    await queryInterface.bulkInsert('Airplanes', [
      { modelNumber: 'Boeing 737', capacity: 200, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: 'Airbus A320', capacity: 180, createdAt: new Date(), updatedAt: new Date() },
      { modelNumber: 'Boeing 747', capacity: 400, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Removing seed data from Airplane table.
     */
    await queryInterface.bulkDelete('Airplanes', null, {});
  },
};