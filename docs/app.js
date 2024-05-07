// Asignar eventos a los botones
document.querySelectorAll('.boton-calculadora').forEach(button => {
    button.addEventListener('click', () => {
        const operacion = button.dataset.action;
        const value = button.textContent;
        
        if (operacion === 'borrarTodo') {
            borrarTodaLaPantalla();
        } else if (operacion === 'borrarCaracterDeLaIzquierda') {
            borrarCaracterDeLaIzquierda();
        } else if (operacion === 'agregar') {
            agregarALaPantalla(value);
        } else if (operacion === 'borrar') {
            borrarUltimoDigito();
        } else if (operacion === 'calcular') {
            calcularResultado();
        }
    });
});

// Función para agregar un valor al campo de texto
function agregarALaPantalla(value) {
    document.getElementById('display').value += value;
}

// Función para borrar todo el contenido del campo de texto
function borrarTodaLaPantalla() {
    document.getElementById('display').value = '';
}

// Función para borrar el último carácter del campo de texto o el carácter a la izquierda del cursor
function borrarCaracterDeLaIzquierda() {
    const pantalla = document.getElementById('display');
    if (pantalla.selectionStart > 0) {
        pantalla.value = pantalla.value.substring(0, pantalla.selectionStart - 1) + pantalla.value.substring(pantalla.selectionStart);
    } else {
        pantalla.value = pantalla.value.slice(0, -1);
    }
}

// Función para borrar el último dígito del campo de texto
function borrarUltimoDigito() {
    const pantalla = document.getElementById('display');
    pantalla.value = pantalla.value.slice(0, -1);
}

// Función para evaluar una expresión de manera segura
function evaluarExpresion(expresion) {
    try {
        return eval(expresion);
    } catch (error) {
        return 'Error: Expresión no válida';
    }
}

// Función para realizar una operación matemática
function calcularResultado() {
    const pantalla = document.getElementById('display');
    const expresion = pantalla.value;
    const resultado = evaluarExpresion(expresion);
    pantalla.value = resultado;
}