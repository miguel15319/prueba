const validarCorreoElectronico = require('./emil');

// Prueba para un correo electrónico válido
test('Correo electrónico válido', () => {
  const correoValido = 'usuario@example.com';
  expect(validarCorreoElectronico(correoValido)).toBe(true);
});

// Prueba para un correo electrónico inválido
test('Correo electrónico inválido', () => {
  const correoInvalido = 'correo_invalido';
  expect(validarCorreoElectronico(correoInvalido)).toBe(false);
});

// Prueba para un correo electrónico con espacios
test('Correo electrónico con espacios', () => {
  const correoConEspacios = 'usuario conespacios@example.com';
  expect(validarCorreoElectronico(correoConEspacios)).toBe(false);
});

// Prueba para un correo electrónico sin dominio
test('Correo electrónico sin dominio', () => {
  const correoSinDominio = 'usuario@';
  expect(validarCorreoElectronico(correoSinDominio)).toBe(false);
});

// Prueba para un correo electrónico con dominio inválido
test('Correo electrónico con dominio inválido', () => {
  const correoDominioInvalido = 'usuario@dominio';
  expect(validarCorreoElectronico(correoDominioInvalido)).toBe(false);
});
