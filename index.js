let montoAhorro
let cantidadTiempo


function pedirDatos() {
    do {
        montoAhorro = Number(prompt("Monto objetivo de ahorro"))
    } while (montoAhorro == "");

    do {
        cantidadTiempo = Number(prompt("Cantidad de meses para ahorrarlo"))
    } while (montoAhorro == "");
}


function objetivoAhorro(monto, tiempo) {
    return monto / tiempo
}


function resultado() {
    let llamado = pedirDatos()
    let ahorro = objetivoAhorro(montoAhorro, cantidadTiempo)
    ahorro = ahorro.toFixed(0)

    for (let i = 1; i <= cantidadTiempo; i++) {
        console.log("El mes ", i, "tendras ahorrado ", ahorro * i)
    }

    alert("Necesitas ahorrar " + ahorro + " durante " + cantidadTiempo + " meses para alcanzar tu objetivo de " + montoAhorro)
}

let muestraResultado = resultado()

let recalcular

do {
    recalcular = prompt("¿Deseas recalcular?. Escribe (SI/NO)")
    recalcular = recalcular.toUpperCase()

    if (recalcular == "SI") {
        console.log("Recalculando...")
        muestraResultado = resultado()
    } else {
        alert("Gracias por usar nuestra aplicacion")
    }
    
} while (recalcular != "NO")
