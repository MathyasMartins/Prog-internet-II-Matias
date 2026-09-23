import fs from 'fs';
import path from 'path';

const CAMINHO_FICHEIRO = path.resolve('livros.json');

export function carregaLivros() {
  try {
    const dados = fs.readFileSync(CAMINHO_FICHEIRO, 'utf-8');
    return JSON.parse(dados);
  } catch (erro) {
    return [];
  }
}

export function salvarLivros(livros) {
  fs.writeFileSync(CAMINHO_FICHEIRO, JSON.stringify(livros, null, 2), 'utf-8');
}

export function adicionarLivro(novoLivro) {
  const livros = carregaLivros();
  livros.push(novoLivro);
  salvarLivros(livros);
}

export function alterarStatus(indice) {
  const livros = carregaLivros();
  if (livros[indice]) {
    livros[indice].status = livros[indice].status === 'Lendo' ? 'Lido' : 'Lendo';
    salvarLivros(livros);
  }
}

export function removerLivro(indice) {
  const livros = carregaLivros();
  if (livros[indice] !== undefined) {
    livros.splice(indice, 1);
    salvarLivros(livros);
  }
}