const btnMostrarLista = document.getElementById('btnMostrarLista');
const btnLimpiarLista = document.getElementById('btnLimpiarLista');
const listaAlumnosContainer = document.getElementById('listaAlumnos');
const tblAlumnosBody = document.getElementById('tblAlumnosBody');
const promedioGrupalSpan = document.getElementById('promedioGrupal');
const numAprobadosSpan = document.getElementById('numAprobados');
const numReprobadosSpan = document.getElementById('numReprobados');

const btnCalcular = document.getElementById('btnCalcular');
const btnLimpiarCalc = document.getElementById('btnLimpiar');
const selectTabla = document.getElementById('selectTabla');
const divMultiplicacion = document.getElementById('Multiplicacion');

function realizarLista() {
    tblAlumnosBody.innerHTML = '';

    let sumaCalificaciones = 0;
    let aprobados = 0;
    let reprobados = 0;

    alumnosData.forEach(function(alumno) {
        const tr = document.createElement('tr');
        
        const tdMatricula = document.createElement('td');
        tdMatricula.textContent = alumno.matricula;
        
        const tdNombre = document.createElement('td');
        tdNombre.textContent = alumno.nombre;
        
        const tdCalificacion = document.createElement('td');
        tdCalificacion.textContent = alumno.calificacion;

        tr.appendChild(tdMatricula);
        tr.appendChild(tdNombre);
        tr.appendChild(tdCalificacion);

        tblAlumnosBody.appendChild(tr);

        sumaCalificaciones += alumno.calificacion;
        if (alumno.calificacion >= 7) {
            aprobados++;
        } else {
            reprobados++;
        }
    });

    const promedio = (sumaCalificaciones / alumnosData.length).toFixed(2);
    promedioGrupalSpan.textContent = promedio;
    numAprobadosSpan.textContent = aprobados;
    numReprobadosSpan.textContent = reprobados;

    listaAlumnosContainer.classList.remove('hidden');
}

function limpiarLista() {
    tblAlumnosBody.innerHTML = '';
    listaAlumnosContainer.classList.add('hidden');
}

function calcularTabla() {
    const numero = parseInt(selectTabla.value, 10);
    divMultiplicacion.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const p = document.createElement('p');
        p.textContent = `${numero} x ${i} = ${numero * i}`;
        divMultiplicacion.appendChild(p);
    }
}

function limpiarTabla() {
    divMultiplicacion.innerHTML = '';
}

btnMostrarLista.addEventListener('click', realizarLista);
btnLimpiarLista.addEventListener('click', limpiarLista);

btnCalcular.addEventListener('click', calcularTabla);
btnLimpiarCalc.addEventListener('click', limpiarTabla);