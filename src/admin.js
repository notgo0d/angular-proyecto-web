let productos = [];

function agregarProducto() {
  const nombre = document.getElementById('nombre').value;
  const precio = document.getElementById('precio').value;

  if (nombre && precio) {
    const nuevoProducto = {
      nombre: nombre,
      precio: parseFloat(precio),
    };

    productos.push(nuevoProducto);
    localStorage.setItem('productos', JSON.stringify(productos)); // Guardar los productos en localStorage
    mostrarProductos();
    limpiarCampos();
  }
}

function mostrarProductos() {
  const tablaProductos = document.getElementById('tabla-productos');
  tablaProductos.innerHTML = '';

  const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];

  productos = productosGuardados; // Cargar los productos almacenados desde localStorage

  productos.forEach((producto, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precio.toFixed(2)}</td>
      <td>
        <button onclick="editarProducto(${index})">Editar</button>
        <button onclick="eliminarProducto(${index})">Eliminar</button>
        <button onclick="agregarAlCarrito(${index})">Agregar al Carrito</button>
      </td>
    `;
    tablaProductos.appendChild(row);
  });
}

function limpiarCampos() {
  document.getElementById('nombre').value = '';
  document.getElementById('precio').value = '';
}

function editarProducto(index) {
  const producto = productos[index];
  const nuevoNombre = prompt('Ingrese el nuevo nombre del producto:', producto.nombre);
  const nuevoPrecio = prompt('Ingrese el nuevo precio del producto:', producto.precio);

  if (nuevoNombre && nuevoPrecio) {
    producto.nombre = nuevoNombre;
    producto.precio = parseFloat(nuevoPrecio);
    mostrarProductos();
  }
}

function eliminarProducto(index) {
  productos.splice(index, 1);
  localStorage.setItem('productos', JSON.stringify(productos)); // Actualizar los productos en localStorage
  mostrarProductos();
}

mostrarProductos();

function agregarAlCarrito(index) {
  const producto = productos[index];
  const url = new URL('http://127.0.0.1:5500/src/carrito.html', window.location.origin);
  url.searchParams.append('nombre', producto.nombre);
  url.searchParams.append('precio', producto.precio.toFixed(2));
  window.location.href = url; // Redireccionar a la página carrito.html con los parámetros
}
