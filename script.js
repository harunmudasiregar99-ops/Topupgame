let game = "ML";
let nominal = 0;

function selectGame(el, g) {
  document.querySelectorAll(".game").forEach(x => x.classList.remove("active"));
  el.classList.add("active");
  game = g;
}

function selectNominal(el, n) {
  document.querySelectorAll(".nominal-list div").forEach(x => x.classList.remove("active"));
  el.classList.add("active");
  nominal = n;
}

async function checkout() {
  let id = document.getElementById("playerId").value;

  if (!id || nominal === 0) {
    alert("Lengkapi data!");
    return;
  }

  let res = await fetch("http://localhost:3000/pay", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({
      user_id: 1,
      game,
      player_id: id,
      nominal
    })
  });

  let data = await res.json();
  snap.pay(data.token);
}
