document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form'); // Selecciona el formulario
    const confirmationBox = document.getElementById('confirmation-box'); // Selecciona la caja de confirmación
    const continueBtn = document.getElementById('continue-btn');
    const editBtn = document.getElementById('edit-btn');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previene el envío del formulario

        // Recolecta los datos del formulario
        const run = document.getElementById('run').value;
        const nombres = document.getElementById('nombres').value;
        const apellidos = document.getElementById('apellidos').value;
        const direccion = document.getElementById('direccion').value;
        const comuna = document.getElementById('comuna').value;
        const provincia = document.getElementById('provincia').value;
        const region = document.getElementById('region').value;
        const fechaNac = document.getElementById('fechaNac').value;
        const sexo = document.getElementById('sexo').value;
        const numTel = document.getElementById('numTel').value;
        const correo = document.getElementById('correo').value;
        const clave = document.getElementById('clave').value;

        // Muestra los datos en la caja de confirmación
        const dataDisplay = document.getElementById('data-display');
        dataDisplay.innerHTML = `
            <p><strong>RUN:</strong> ${run}</p>
            <p><strong>Nombres:</strong> ${nombres}</p>
            <p><strong>Apellidos:</strong> ${apellidos}</p>
            <p><strong>Dirección:</strong> ${direccion}</p>
            <p><strong>Comuna:</strong> ${comuna}</p>
            <p><strong>Provincia:</strong> ${provincia}</p>
            <p><strong>Región:</strong> ${region}</p>
            <p><strong>Fecha de Nacimiento:</strong> ${fechaNac}</p>
            <p><strong>Sexo:</strong> ${sexo}</p>
            <p><strong>Número de Teléfono:</strong> ${numTel}</p>
            <p><strong>Correo Electrónico:</strong> ${correo}</p>
            <p><strong>Contraseña:</strong> ${clave}</p>
        `;

        // Muestra la caja de confirmación
        confirmationBox.style.display = 'block';
    });

    continueBtn.addEventListener('click', () => {
        // Redirige a la URL
        window.location.href = "https://andresinh0.github.io/inicioSesionSushi/";
    });

    editBtn.addEventListener('click', () => {
        // Oculta la caja de confirmación para permitir editar los datos
        confirmationBox.style.display = 'none';
    });
});
