import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const nombre = params.get('nombre');
      const precio = params.get('precio');

      if (nombre && precio) {
        const producto = { nombre: nombre, precio: parseFloat(precio) };
        this.productos.push(producto);
      }
    });
  }
}

