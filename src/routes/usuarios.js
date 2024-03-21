import { app } from "../app.js";
import conexao from "../models/conexao.js";

app.get("/usuarios", (req, res) => {
  const usuarios = "SELECT * FROM usuarios";
  conexao.query(usuarios, (erro, resultado) => {
    if (erro) {
      res.status(404).json(erro);
    } else {
      res.status(200).json(resultado);
    }
  });
});

app.post("/usuarios", (req, res) => {
  const novoUsuario = req.body;
  const adicionarNovoUsuario = "INSERT INTO usuarios SET ?";
  conexao.query(adicionarNovoUsuario, novoUsuario, (erro, resultado) => {
    if (erro) {
      res.status(404).json(erro);
    } else {
      res.status(201).json(resultado);
    }
  });
});

app.put("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  const novoUsuario = req.body;
  const trocarUsuario = "UPDATE usuarios SET ? WHERE id =?";
  conexao.query(trocarUsuario, [novoUsuario, id], (erro, resultado) => {
    if (erro) {
      res.status(404).json(erro);
    } else {
      res.status(200).json(resultado);
    }
  });
});

app.delete("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  const deletarUsuario = "DELETE FROM usuarios WHERE id = ?";
  conexao.query(deletarUsuario, id, (erro, resultado) => {
    if (erro) {
      res.status(404).json({ erro: erro });
    } else {
      res.status(200).json(resultado);
    }
  });
});
