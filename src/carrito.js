function mostrarProductosEnCarrito() {
  const tablaCarrito = document.getElementById('tabla-carrito');
  tablaCarrito.innerHTML = '';

  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const urlParams = new URLSearchParams(window.location.search);

  if (carrito.length > 0) {
    // Mostrar productos del localStorage (si hay)
    carrito.forEach((producto) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${producto.nombre}</td>
        <td>$${producto.precio.toFixed(2)}</td>
      `;
      tablaCarrito.appendChild(row);
    });
  } else if (urlParams.has('nombre') && urlParams.has('precio')) {
    // Mostrar productos pasados por URL
    const nombre = urlParams.get('nombre');
    const precio = urlParams.get('precio');

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${nombre}</td>
      <td>$${precio}</td>
    `;
    tablaCarrito.appendChild(row);
  }
}

mostrarProductosEnCarrito();
