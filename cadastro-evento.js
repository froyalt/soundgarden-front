const form = document.getElementById("create-event-form");

function criarEvento(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const atracoes = document.getElementById("atracoes").value.split(",");
  const descricao = document.getElementById("descricao").value;
  const data = document.getElementById("data").value;
  const dateObject = new Date(data);
  const isoDate = dateObject.toISOString();
  const lotacao = document.getElementById("lotacao").value;

  const evento = {
    name: nome,
    poster: "link",
    attractions: atracoes,
    description: descricao,
    scheduled: isoDate,
    number_tickets: lotacao,
  };

  fetch("https://xp41-soundgarden-api.herokuapp.com/events", {
    method: "POST",
    body: JSON.stringify(evento),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}
