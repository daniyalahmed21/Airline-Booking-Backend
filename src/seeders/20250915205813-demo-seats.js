'use strict';

export async function up(queryInterface, Sequelize) {
  // Example: Seeding seats for Airplane with id 1
  // You can adjust airplaneId, rows, cols, and types as needed

  const seats = [];

  // Generate 30 seats for airplaneId 1
  for (let row = 1; row <= 10; row++) {
    ['A', 'B', 'C'].forEach((col) => {
      seats.push({
        airplaneId: 1,         // Adjust airplaneId according to your DB
        row: row,
        col: col,
        type: row <= 2 ? 'BUSINESS' : 'ECONOMY', // first two rows Business, rest Economy
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });
  }

  await queryInterface.bulkInsert('Seats', seats, {});
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('Seats', null, {});
}
