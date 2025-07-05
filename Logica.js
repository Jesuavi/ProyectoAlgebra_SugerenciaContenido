function aplicarSVD() {
  const predicciones = {
    "Usuario 1": { "Película B": 4.5 },
    "Usuario 2": { "Película A": 3.5, "Película C": 4.2 },
    "Usuario 3": { "Película B": 2.8 }
  };

  let resultadoHTML = "<h2>Calificaciones Predichas</h2><ul>";

  for (let usuario in predicciones) {
    resultadoHTML += `<li><strong>${usuario}:</strong><ul>`;
    for (let pelicula in predicciones[usuario]) {
      const nota = predicciones[usuario][pelicula];
      resultadoHTML += `<li>${pelicula}: ${nota.toFixed(1)} ⭐</li>`;
    }
    resultadoHTML += "</ul></li>";
  }

  resultadoHTML += "</ul><h3>🎬 Recomendaciones para Usuario 1:</h3><p>Película B (4.5 estrellas)</p>";

  document.getElementById("resultado").innerHTML = resultadoHTML;
}
