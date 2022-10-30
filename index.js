const productos = [
    {id: 1, producto: "labial en barra rojo", precio: 2500, stock: 10},
    {id: 2, producto: "labial en barra burdeos", precio: 2500, stock: 2},
    {id: 3, producto: "labial en barra rosa", precio: 2500, stock: 12},
    {id: 4, producto: "labial liquido durazno", precio: 3500, stock: 2},
    {id: 5, producto: "labial liquido rojo", precio: 3500, stock: 8},
    {id: 6, producto: "labial liquido rosa", precio: 3500, stock: 0},
    {id: 7, producto: "rubor en polvo tres colores", precio: 15000, stock: 6},
    {id: 8, producto: "rubor en polvo dos colores", precio: 10000, stock: 0},
    {id: 9, producto: "rubor en barra rosa claro", precio: 25000, stock: 3},
    {id: 10, producto: "rubor en barra rosa oscuro", precio: 25000, stock: 0},
    {id: 11, producto: "rubor en barra rosa marron oscuro", precio: 25000, stock: 1},
    {id: 12, producto: "corrector de ojeras claro", precio: 20000, stock: 4},
    {id: 13, producto: "corrector de ojeras medio", precio: 20000, stock: 0},
    {id: 14, producto: "sombras para contornear rostro duo", precio: 16000, stock: 5},
    {id: 15, producto: "iluminador", precio: 12000, stock: 8},
    {id: 16, producto: "mascara para pestañas transparente", precio: 20000, stock: 14},
]

let ingresarProducto
let cargarOtroProducto
let ingresarPrecio
let ingresarStock
let generadorDeId = 16
generadorDeId += 1

function ingresarProductoNuevo() {
    do {  
        ingresarProducto = prompt("Producto");
        ingresarPrecio = parseInt(prompt("Precio"));
        ingresarStock = parseInt(prompt("Stock"))
        
        productos.push({ id: generadorDeId, producto: ingresarProducto, precio: ingresarPrecio, stock: ingresarStock });
        
        cargarOtroProducto = prompt(
        "Deseas cargar otro producto (SI/NO)"
      ).toLocaleUpperCase();
    } while (cargarOtroProducto != "NO");
}

function eliminarProductosConStock() {
    for (const producto of productos) {
       // let stockDelProducto = producto.stock
       console.log(producto)

       if (producto.stock == 0){

           productos.splice(producto.stock, 1);
       }
      //do {
      //} while (productos.stock > 0);
    }
}

function mostrarProductos() {
    let guardar = "";
    for (const producto of productos) {
      guardar += "- " + producto.producto + "\n "
    }
    console.log(`Tienes ${productos.length} productos con Stock 0, detalle:\n ${guardar}`);
    alert(`Tienes ${productos.length} productos con Stock 0, detalle:\n ${guardar}`);
}

ingresarProductoNuevo()

eliminarProductosConStock()

mostrarProductos()


