let tipoDeCredito = prompt("Ingrese el tipo de crédito (A o B): ");
let esCliente = prompt("¿Es usted cliente de la entidad? (Sí o No): ");

if (tipoDeCredito === "A") {
  if (esCliente === "No") {
    let antecedentes = prompt("Por favor, presente sus antecedentes personales: ");
    let empleado = prompt("¿Es usted empleado? (Sí o No): ");
    if (empleado === "Sí") {
      let liquidaciones = prompt("Por favor, presente sus cuatro últimas liquidaciones de sueldo: ");
    } else {
      let impuestos = prompt("Por favor, presente su última declaración de impuestos: ");
    }
  } else {
    let promedioMensual = prompt("Ingrese su promedio mensual: ");
    if (promedioMensual >= ciertoValor) {
      let solicitudSimple = prompt("Llene una solicitud simple.");
    } else {
      let empleado = prompt("¿Es usted empleado? (Sí o No): ");
      if (empleado === "Sí") {
        let liquidaciones = prompt("Por favor, presente sus cuatro últimas liquidaciones de sueldo: ");
      } else {
        let impuestos = prompt("Por favor, presente su última declaración de impuestos: ");
      }
    }
  }
} else {  // Es el tipo de crédito B
  if (esCliente === "Sí") {
    let antiguedad = prompt("Ingrese su antigüedad como cliente (en meses): ");
    if (antiguedad >= ciertoValor) {
      let solicitudSimple = prompt("Llene una solicitud simple.");
    } else {
      let promedioMensual = prompt("Ingrese su promedio mensual: ");
      if (promedioMensual >= ciertoValor) {
        let solicitudSimple = prompt("Llene una solicitud simple.");
      } else {
        let propiedadRaiz = prompt("Por favor, presente algún documento que acredite la propiedad de un bien raíz: ");
      }
    }
  } else {
    console.log("Lo siento, no puede acceder al crédito B si no es cliente de la entidad.");
  }
}


function mostrara() {
    var x = document.getElementById('TIPOA');
    var y = document.getElementById('TIPOB');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      y.style.display = 'none';
      console.log("patata");
    } else {
      x.style.display = 'none';
    }
}
function mostrarb() {
    var x = document.getElementById('TIPOB');
    var y = document.getElementById('TIPOA');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      y.style.display = 'none';
      console.log("patata");
    } else {
      x.style.display = 'none';
    }
}
function NOA() {
    var x = document.getElementById('noA');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      console.log("patata");
    } else {
      x.style.display = 'none';
    }
}
function finNO(){
    var x = document.getElementById('finNO');
    var y = document.getElementById('sii');
    var z = document.getElementById('finalazo');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      console.log("patata");
      y.disabled=true;
      z.style.display='block';
    } else {
      x.style.display = 'none';
    }
}
function finSI(){
    var x = document.getElementById('finSI');
    var y = document.getElementById('noo');
    var z = document.getElementById('finalazo');
    if (x.style.display === 'none') {
      x.style.display = 'block';
      console.log("patata");
      y.disabled=true;
      z.style.display='block';
    } else {
      x.style.display = 'none';
    }
}
function menfinal() {
    var x = document.getElementById('pollo');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        setTimeout(function() {
            location.reload();
        }, 10000);
    } else {
        x.style.display = 'none';
    }
}

