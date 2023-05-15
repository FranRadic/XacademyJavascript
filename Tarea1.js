

// 1) Realizar una funcion que reciba un numero y escriba una piramide desde 1 hasta ese numero de la siguiente forma:para valor 6

function patron(num) {
    let row = '';
    for (let i = 1; i <= num; i++) {
      row += i;
      console.log(row);
    }
  }
    patron(6);


// Para valor 3

function patron(num) {
    let row = '';
    for (let i = 1; i <= num; i++) {
      row += i;
      console.log(row);
    }
  }
    patron(3);



//2) Escribir una funcion que reciba 2 array y devuelva un array con todos los elementos que coinciden entre ellos

function encontrarCoincidencias(array1, array2) {
    let coincidencias = [];
  
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
        coincidencias.push(array1[i]);
      }
    }
  
    return coincidencias;
  }
  
  const array1 = ['Perro', 'Conejo', 'Gato'];
  const array2 = ['Conejo', 'Pato', 'Loro'];

  const resultado = encontrarCoincidencias(array1, array2);
  
  console.log(resultado); // Imprime "[ 'Conejo' ]"
  
  
//   3)
// 3.1) Dado el siguiente objeto
// let carrito = {
//     montoTotal: 10,
//     productos: ["Leche"]
// }

// Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.

// class Carrito {
//     montoTotal;
//     productos;
// }


// 3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal

// agregarProducto(nombre, precio, unidades) {
// Completar aca...
// }

class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
      this.montoTotal += producto.precio;
    }
  }
  
  const leche = new Producto("Leche", 2);
  const pan = new Producto("Pan", 1.5);
  
  const carrito = new Carrito();
  carrito.agregarProducto(leche);
  carrito.agregarProducto(pan);
  
  console.log(carrito.montoTotal); // Imprime 3.5
  console.log(carrito.productos); // Imprime [ { nombre: "Leche", precio: 2 }, { nombre: "Pan", precio: 1.5 } ]
  



  // Ej:
// agregarProducto("Azucar", 5, 2);

//Resultado esperado
// carrito = {
//     montoTotal: 20,
//     productos: ["Leche", "Azucar"]
// }





// 3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx con yyy unidades”

class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    agregarProducto(producto, unidades) {
      const productoIndex = this.productos.findIndex((p) => p.nombre === producto);
      if (productoIndex !== -1) {
        console.log(`Ya existe ${producto} con ${this.productos[productoIndex].unidades} unidades`);
        return;
      }
      this.productos.push({ nombre: producto, unidades });
      this.montoTotal += unidades;
    }
  }
  
  const miCarrito = new Carrito();
  miCarrito.agregarProducto("Leche", 1);
  miCarrito.agregarProducto("Queso", 2);
  miCarrito.agregarProducto("Leche", 3);
  miCarrito.agregarProducto("Yogurt", 2);
  
  console.log(miCarrito);
  

//console.log("Hola Mundo soy Fran")