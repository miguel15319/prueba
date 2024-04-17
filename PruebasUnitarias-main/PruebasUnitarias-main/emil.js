function validarCorreoElectronico(correoElectronico) {
  const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expresionRegular.test(correoElectronico);
}

module.exports = validarCorreoElectronico;