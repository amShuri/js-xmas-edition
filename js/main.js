function validarNombre(nombre) {
  if (nombre.length <= 0) {
    return 'El campo nombre debe tener al menos 1 caracter';
  }

  if (nombre.length > 50) {
    return 'El campo nombre no puede tener más de 50 caracteres';
  }

  const contieneSoloLetras = /^[A-z]+$/.test(nombre);
  if (!contieneSoloLetras) {
    return 'El campo nombre solo puede contener letras';
  }

  return '';
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return 'El campo ciudad no puede estar vacío';
  }

  return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return 'El campo descripción no puede estar vacío';
  }

  if (descripcionRegalo.length > 100) {
    return 'El campo descripción no puede tener más de 100 caracteres';
  }

  if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
    return 'El campo descripción solo puede contener letras y números';
  }

  return '';
}

function validarForm(e) {
  e.preventDefault();
  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form['descripcion-regalo'].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    'descripcion-regalo': errorDescripcionRegalo,
  };

  const $cantidadErrores = manejarErrores(errores);
  if ($cantidadErrores === 0) {
    const $mensajeExito = document.querySelector('#exito');
    $mensajeExito.className = '';
    $form.className = 'oculto';
    mostrarWishlist();
  }
}

function manejarErrores(errores) {
  const $contenedorErrores = document.querySelector('#errores');
  const keys = Object.keys(errores);
  let cantidadErrores = 0;

  keys.forEach((key) => {
    const error = errores[key];
    const $errores = $contenedorErrores.querySelector(`li.${key}`);

    if (error && !$errores) {
      $form[key].className = 'error';
      const $error = document.createElement('li');
      $error.textContent = error;
      $error.className = key;
      $contenedorErrores.appendChild($error);
    } else if (!error && $errores) {
      $errores.remove();
      $form[key].className = '';
    }

    if (error) {
      cantidadErrores++;
    }
    // Si el error existente cambia a un error diferente, actualizamos el texto
    if ($errores && $errores.textContent !== error) {
      $errores.textContent = error;
    }
  });
  return cantidadErrores;
}

function mostrarWishlist() {
  setTimeout(() => {
    window.location.href = 'wishlist.html';
  }, 5000);
}

const $form = document.querySelector('form');
$form.onsubmit = validarForm;
