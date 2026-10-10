// Envoltura (Wrapper) que atrapa los errores de promesas y los pasa al errorHandler.
// Esto nos ahorra escribir bloques try/catch en cada controlador.
const catchAsync = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
module.exports = catchAsync;
