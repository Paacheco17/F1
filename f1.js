document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const mensajesDiv = document.getElementById('discusion');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const usuario = document.getElementById('usuario').value;
      const mensaje = document.getElementById('mensaje').value;
  
      // Crear un elemento de mensaje
      const nuevoMensaje = document.createElement('div');
      nuevoMensaje.innerHTML = `<strong>${usuario}:</strong> ${mensaje}`;
      mensajesDiv.appendChild(nuevoMensaje);
  
      // Limpiar los campos del formulario después de enviar el mensaje
      document.getElementById('usuario').value = '';
      document.getElementById('mensaje').value = '';
    });
  }
);

document.addEventListener('DOMContentLoaded', function() {
    const botonSiguiente = document.getElementById('botonSiguiente');
    const fotos = document.querySelectorAll('.foto');
    let currentIndex = 0;
  
    botonSiguiente.addEventListener('click', function() {
      mostrarSiguienteFoto();
    });
  
    function mostrarSiguienteFoto() {
      fotos[currentIndex].classList.remove('mostrar');
      currentIndex = (currentIndex + 1) % fotos.length;
      fotos[currentIndex].classList.add('mostrar');
    }
  }
);


  