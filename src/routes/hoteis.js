import { app } from "../app.js";
import conexao from "../models/conexao.js";

app.get("/hoteis", (req, res) => {
  const hoteis = "SELECT * FROM hoteis";
  conexao.query(hoteis, (erro, resultado) => {
    if (erro) {
      res.status(404).json({ erro: erro });
    } else {
      res.status(200).json(resultado);
    }
  });
});

app.post("/hoteis", (req, res) => {
  const novoHotel = req.body;
  const adicionarNovoHotel = "INSERT INTO hoteis SET ?";
  conexao.query(adicionarNovoHotel, novoHotel, (erro, resultado) => {
    if (erro) {
      res.status(404).json({ erro: erro });
    } else {
      res.status(201).json(resultado);
    }
  });
});

app.delete("/hoteis/:id", (req, res) => {
  const id = req.params.id;
  const deletarHotel = "DELETE FROM hoteis WHERE id = ?";
  conexao.query(deletarHotel, id, (erro, resultado) => {
    if (erro) {
      res.status(404).json({ erro: erro });
    } else {
      res.status(200).json(resultado);
    }
  });
});

app.put("/hoteis/:id", (req, res) => {
  const id = req.params.id;
  const novoHotel = req.body;
  const alterarHotel = "UPDATE hoteis SET ? WHERE id = ?";
  conexao.query(alterarHotel, [novoHotel, id], (erro, resultado) => {
    if (erro) {
      res.status(404).json({ erro: erro });
    } else {
      res.status(200).json(resultado);
    }
  });
});
