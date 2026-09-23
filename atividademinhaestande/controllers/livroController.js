import * as livroModel from '../models/livroModel.js';

export function listar(req, res) {
  const livros = livroModel.carregaLivros();
  res.render('principal', { livros });
}

export function formNovo(req, res) {
  res.render('novoLivro');
}

export function criar(req, res) {
  const { titulo, autor, paginas } = req.body;
  const novoLivro = {
    titulo,
    autor,
    paginas: Number(paginas),
    status: 'Lendo'
  };
  livroModel.adicionarLivro(novoLivro);
  res.redirect('/livros');
}

export function alterarStatus(req, res) {
  const { indice } = req.params;
  livroModel.alterarStatus(Number(indice));
  res.redirect('/livros');
}

export function remover(req, res) {
  const { indice } = req.params;
  livroModel.removerLivro(Number(indice));
  res.redirect('/livros');
}