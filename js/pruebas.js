function probarValidarNombre() {
  console.assert(
    validarNombre('') === 'El campo nombre debe tener al menos 1 caracter',
    'validarNombre() no pudo comprobar que el nombre no fuera < 1 caracter'
  );

  console.assert(
    validarNombre('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') ===
      'El campo nombre no puede tener más de 50 caracteres',
    'validarNombre() no pudo comprobar que el nombre no fuera > 50 caracteres'
  );

  console.assert(validarNombre('Nombre') === '', 'validarNombre() falló con un nombre válido');

  console.assert(
    validarNombre('asd1') === 'El campo nombre solo puede contener letras',
    'validarNombre() no pudo comprobar que el nombre solo tuviera letras'
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad('Misiones') === '',
    'validarCiudad() no funcionó con un nombre de ciudad válido'
  );
  console.assert(
    validarCiudad('') === 'El campo ciudad no puede estar vacío',
    'validarCiudad() no pudo comprobar que haya una ciudad seleccionada'
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo('') === 'El campo descripción no puede estar vacío',
    'validarDescripcionRegalo() no pudo comprobar que el campo descripción no estuviera vacío'
  );

  console.assert(
    validarDescripcionRegalo(
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1'
    ) === 'El campo descripción no puede tener más de 100 caracteres',
    'validarDescripcionRegalo() no pudo comprobar que el campo descripción no fuera > 100 caracteres'
  );

  console.assert(
    validarDescripcionRegalo('Regalos') === '',
    'validarDescripcionRegalo() no pudo comprobar que el campo descripción sea válido'
  );

  console.assert(
    validarDescripcionRegalo('sad123_,') ===
      'El campo descripción solo puede contener letras y números',
    'validarDescripcionRegalo() no pudo comprobar que el campo descripción solo contenga letras y números'
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
