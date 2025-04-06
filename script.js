const frutas = ["Manzana", "Banana", "Naranja", "Fresa"];

const lista = document.getElementById("lista-frutas");

frutas.forEach(fruta => {
  const li = document.createElement("li");
  li.textContent = fruta;
  lista.appendChild(li);
});
