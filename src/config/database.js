const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.info('Conectado a MongoDB exitosamente');
    } catch (error) {
        console.error('Error fatal conectando a MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;