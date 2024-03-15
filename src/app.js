import express from "express";
import conexao from "./models/conexao.js";
export const app = express();

app.use(express.json());

app.get("/hotel", (req, res) => {
  const hoteis = "SELECT * FROM hoteis";
  conexao.query(hoteis, (erro, resultado) => {
    if (erro) {
      res.status(404).json(erro);
    } else {
      res.status(200).json(resultado);
    }
  });
});

app.post("/hotel", (req, res) => {
  const novoHotel = req.body;
  const adicionarNovoHotel = "INSERT INTO hoteis SET ?";
  conexao.query(adicionarNovoHotel, novoHotel, (erro, resultado) => {
    if (erro) {
      res.status(404).json(erro);
    } else {
      res.status(201).json(resultado);
    }
  });
});

app.delete("/hotel/:id", (req, res) => {
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
