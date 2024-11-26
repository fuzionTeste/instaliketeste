import 'dotenv/config';
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js'; // Importando a função de conexão
import { atualizarNovoPost } from '../controllers/postsController.js';

// Função assíncrona para buscar todos os posts no banco de dados
export async function getTodosPosts() {
  try {
    const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco
    const db = conexao.db('imersão-instalike');
    const colecao = db.collection('posts');
    return await colecao.find().toArray();
  } catch (erro) {
    console.error('Erro ao buscar posts:', erro);
    throw erro;
  }
}

// Função assíncrona para criar um novo post
export async function criarPost(novoPost) {
  try {
    const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco
    const db = conexao.db('imersão-instalike'); // Acessa o banco de dados
    const colecao = db.collection('posts'); // Acessa a coleção 'posts'
    return await colecao.insertOne(novoPost); // Insere o novo post
  } catch (erro) {
    console.error('Erro ao criar o post:', erro);
    throw erro; // Lança o erro para ser tratado em outro lugar
  }
}

export async function atualizarPost(id, novoPost) {
  const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Certifique-se de conectar antes
  const db = conexao.db('imersão-instalike');  // Acesse o banco de dados
  const colecao = db.collection('posts');     // Acesse a coleção 'posts'
  const objID = new ObjectId(id);             // Crie o ObjectId corretamente

  return colecao.updateOne({ _id: objID }, { $set: novoPost }); // Atualize o post com o novo conteúdo
}