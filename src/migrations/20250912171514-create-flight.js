'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: {
          model: 'Airplanes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: {
          model: 'Airports',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: {
          model: 'Airports',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      arrivalDate: {
        type: Sequelize.DATE,
        allowNull: false, 
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: false, 
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false, 
      },
      boardingDate: {
        type: Sequelize.STRING,
        allowNull: true,  
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull: false, 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  },
};
