const dataBase = {
    Equipos: [
        { idEquipos: 101, nombreEquipo: "Laptop Dell XPS", documento: "documento1.pdf" },
        { idEquipos: 102, nombreEquipo: "Cinta Velocidad Pro", documento: "documento2.pdf" },
        { idEquipos: 103, nombreEquipo: "Bomba Industrial", documento: "documento3.pdf" },
    ],
};

function llenarTabla() {
    const tbody = document.querySelector("#equiposTable tbody");
    tbody.innerHTML = ""; // Limpiar la tabla antes de llenarla

    dataBase.Equipos.forEach(equipo => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${equipo.nombreEquipo}</td>
            <td><a href="${equipo.documento}" target="_blank">Ver Documento</a></td>
        `;

        tbody.appendChild(row);
    });
}

// Llenar la tabla cuando la página cargue
document.addEventListener("DOMContentLoaded", llenarTabla);