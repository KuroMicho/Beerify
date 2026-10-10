const mongoose = require('mongoose');
const logger = require('../utils/logger');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        logger.info('Conectado a MongoDB exitosamente');
    } catch (error) {
        logger.error('Error fatal conectando a MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;