class Producto {
    constructor(nombre, categoria, stock, cantidadComprada){
        this.nombre = nombre;
        this. categoria = categoria;
        this.stock = stock;
        this,cantidad = cantidadComprada;
    }

controlStock (){
    
    if(this.cantidad > this.stock) {
        
        alert("No tenemos suficiente stock de este producto.")
    }
    else if (this.cantidad < this.stock && this. cantidad > 0){

        this.stock = this.stock - this.cantidad
        alert("la cantidad ingresada es: " + this.cantidad + " el stock actualizado es de: " + this.stock);
        console.log()
    }
}
}

let compraUsuario = Number (prompt("Ingrese la cantidad a comprar"));
const objeto1 = new Producto ("fideos", "pastas", 50);
objeto1.controlStock ()
