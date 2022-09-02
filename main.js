// Clase con los parámetros requeridos para cada objeto
class NewsTasks {
    constructor(task, project, time, price) {
        this._task = task;
        this._project = project;
        this._time = time;
        this._price = price;
    }
}

// Obtenemos y ejecutamos la función al hacer click sobre el botón de Agregar Tarea
const addNewTask = document.querySelector('#addTask');
addNewTask.addEventListener('click', addTask);

// Creamos un nuevo objeto, en el cual almacenamos/validamos con condicionales e imprimimos en el DOM
function addTask() {
    let TaskOne = new NewsTasks(prompt('¿Qué tarea estas realizando?'), 
    prompt('¿Para qué proyecto estás realizando esta tarea?'),
    prompt('¿Cuantas horas te llevó hacerla?'),
    prompt('¿Cuál es el monto en USD que cobrás por hora?'));

    if (TaskOne._task && TaskOne._project && !isNaN(TaskOne._time) && !isNaN(TaskOne._price)) {
        let newTasks = document.createElement('div');
        document.querySelector('#tasks').append(newTasks);
        newTasks.innerHTML = `<h2>${TaskOne._project}</h2>
        <a href="#" class="active"><input type="checkbox" checked=checked> ${TaskOne._task}</a>
        <a href="#"> Trabajó ${TaskOne._time}hs</a>
        <a href="#"> Cobró ${TaskOne._price} U$D por hora</a>`;
    
        newTasks.classList.add('tasks');
    } else {
        let error = document.createElement('error');
        document.querySelector('#tasks').append(error);
        error.innerHTML = `<div class="error">
        <h2>¡Tenés que ingresar los datos correctamente para poder agregar tu tarea a nuestra base de datos!</h2>
    </div>`
    };
}

// Obtenemos y ejecutamos la función al hacer click sobre el botón de Registrar Tarea
const registerTaskBtn = document.getElementById('registerTask');
registerTaskBtn.addEventListener('click', Task);

// Ejecutamos la función con un botón para mostrarle al cliente los datos, en el caso que no cumpla TODOS los parámetros pedidos por la condicional no se ejecuta y te pide
// volver a ejecutar el programa, si el tiempo y el precio no son números tampoco va a validar como que está correcta, si o si tienen que pasarles un número como parámetro
function Task() {
    if (TaskOne._task && TaskOne._project && !isNaN(TaskOne._time) && !isNaN(TaskOne._price)){
        let totalPrice = TaskOne._time * TaskOne._price; 
        alert(`¡Ya registramos tu tarea en nuestra base de datos!
        
Trabajaste en el ${TaskOne._task} para ${TaskOne._project}, con un total de ${TaskOne._time}hs a un precio de ${TaskOne._price}U$D por hora. El total de U$D ganados por este proyecto es de ${totalPrice}U$D.`);
        
        // Una vez ya ejecutado y habiendole mostrado el resultado de su tarea al cliente ejecutamos la función de Conversión de monedas de U$D a ARS (pesos Argentinos)
        Convertor();
    } else {
        alert(`¡No ingresaste los datos suficientas para crear una tarea!
Volvé a intentarlo`);
        // Recargar web en el caso que no haya ingresado los datos pedidos
        location.reload();
    }
}

// En el caso que el usuario lo desee, convierte sus U$D a ARS con esta función
function Convertor() {
    let usd = Tasks.time * Tasks.price;
    let ars = 137;
    let convertorUSD = usd * ars;
    
    let convertor = prompt('¿Querés convertir esos U$D a ARS? (Si / No)');
    if (convertor == "Y" || convertor == "y" || convertor == "Si" || convertor == "SI" || convertor == "si" || convertor == "S" || convertor == "s") {
        alert(`Te informamos que el Dólar Oficial hoy 01/09/2022 es igual $137 ARS`);
        alert(`Los ingresos obtenidos por el ${Tasks.task} es un total de ${convertorUSD} Pesos Argentinos.`);
    } else {
        alert(`¡Perfecto! El total obtenido por ${Tasks.project} seguirá siendo de ${usd}U$D.`);
    };
};