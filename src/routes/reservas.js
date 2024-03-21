import { app } from "../app.js";
import conexao from "../models/conexao.js";

app.get("/reservas", (req, res) => {
  const reservas = "SELECT * FROM reservas";
  conexao.query(reservas, (erro, resultado) => {
    if (erro) {
      res.status(404).json(erro);
    } else {
      res.status(200).json(resultado);
    }
  });
});

app.post("/reservas", (req, res) => {
  const reserva = req.body;
  const adicionarReserva = "INSERT INTO reservas SET ?";
  conexao.query(adicionarReserva, reserva, (erro, resultado) => {
    if (erro) {
      res.status(404).json(erro);
    } else {
      res.status(201).json(resultado);
    }
  });
});

app.put("/reservas/:id", (req, res) => {
    const id = req.params.id;
    const novaReserva = req.body;
    const trocarReservs = "UPDATE reservas SET ? WHERE id =?";
    conexao.query(trocarReservs, [novaReserva, id], (erro, resultado) => {
      if (erro) {
        res.status(404).json(erro);
      } else {
        res.status(200).json(resultado);
      }
    });
  });

  app.delete("/reservas/:id", (req, res) => {
    const id = req.params.id;
    const deletarReserva = "DELETE FROM reservas WHERE id = ?";
    conexao.query(deletarReserva, id, (erro, resultado) => {
      if (erro) {
        res.status(404).json({ erro: erro });
      } else {
        res.status(200).json(resultado);
      }
    });
  });
