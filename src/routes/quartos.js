import { app } from "../app.js";
import conexao from "../models/conexao.js";

app.get("/quartos", (req, res) => {
  const quartos = "SELECT * FROM quartos";
  conexao.query(quartos, (erro, resultado) => {
    if (erro) {
      res.status(404).json({ erro: erro });
    } else {
      res.status(200).json(resultado);
    }
  });
});

app.post("/quartos", (req, res) => {
  const novoQuarto = req.body;
  const adicionarNovoQuarto = "INSERT INTO quartos SET ?";
  conexao.query(adicionarNovoQuarto, novoQuarto, (erro, resultado) => {
    if (erro) {
      res.status(404).json({ erro: erro });
    } else {
      res.status(201).json(resultado);
    }
  });
});

app.delete("/quartos/:id", (req, res) => {
  const id = req.params.id;
  const deletarQuarto = "DELETE FROM quartos WHERE id = ?";
  conexao.query(deletarQuarto, id, (erro, resultado)=> {
    if (erro) {
      res.status(404).json({ erro: erro });
    } else {
      res.status(200).json(resultado);
    }
  });
});

app.put("/quartos/:id", (req, res) => {
  const id = req.params.id;
  const novoQuarto = req.body;
  const alterarQuarto = "UPDATE quartos SET ? WHERE id = ?";
  conexao.query(alterarQuarto, [novoQuarto, id], (erro, resultado) => {
    if (erro) {
      res.status(404).json({ erro: erro });
    } else {
      res.status(200).json(resultado);
    }
  });
});
