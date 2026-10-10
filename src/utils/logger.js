// Centraliza los console.log para poder guardarlos en archivos en un futuro
const logger = {
  info: (msg) => console.log(`[INFO] ${new Date().toISOString()} - ${msg}`),
  error: (msg, err) =>
    console.error(`[ERROR] ${new Date().toISOString()} - ${msg}`, err || ""),
};
module.exports = logger;
