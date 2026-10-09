const app = require("./app");
const connectDB = require("./config/database");

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  const server = app.listen(PORT, () => {
    console.info(
      `Servidor ejecutándose en puerto ${PORT} - Modo: ${process.env.NODE_ENV}`,
    );
  });

  process.on("SIGTERM", () => {
    console.info("Señal SIGTERM recibida. Cerrando servidor HTTP...");
    server.close(() => {
      console.info("Servidor HTTP cerrado.");
      process.exit(0);
    });
  });
});
