import express from 'express';
import routes from './src/config/routes/postsRoutes.js';

// Array de posts (inicialmente para exemplo, será substituído pela busca no banco)
const posts = [
    {
        id: 1,
        descricao: 'macaco cabuloso',
        imgurl: 'https://images.unsplash.com/photo-1445583934509-4ad5ffe6ef08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D',
    },
    {
        id: 2,
        descricao: 'macaco brincalhão',
        imgurl: 'https://images.unsplash.com/photo-1532369686230-30f7f5ef5b4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D',
    },
    {
        id: 3,
        descricao: 'macaco curioso',
        imgurl: 'https://images.unsplash.com/photo-1612152213994-5e9cc0a12070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D',
    },
];

// Cria uma instância do Express
const app = express();
app.use(express.static('uploads'))
routes(app)


// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('servidor escutando...');
});