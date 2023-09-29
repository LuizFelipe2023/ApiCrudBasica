import express from 'express';
import {buscaJogos, buscaporId, insereJogo,atualizarJogo, deletarJogo} from './funcoes.js';
const app = express();

app.use(express.json());

app.post('/jogos',(req,res)=>{
    const novoJogo = req.body;
    insereJogo(novoJogo);
    res.status(201).send({messagem: 'Jogo Inserido com sucesso'});
});

app.get('/jogos', (req,res)=>{
    const busca = buscaJogos();
    res.json(busca);
});

app.get('/jogos/:id',(req,res)=>{
    const id = req.params.id;
    const buscaId = buscaporId(id);
    if(buscaId){
        res.json(buscaId);
    }else{
        res.status(404).json({error: 'Jogo não encontrado'});
    }
    
});


app.put('/jogos/:id',(req,res)=>{
    const id = req.params.id
    const{nome,plataforma,ano} = req.body;
    const atualizar = atualizarJogo(id,nome,plataforma,ano);
    if(atualizar){
        res.status(200).json({mensagem: 'Jogo atualizado com sucesso'});
    }else{
        res.status(404).json({error: 'Jogo não encontrado'});
    }
});
app.delete('/jogos/:id',(req,res)=>{
    const id = req.params.id;
    const deletar = deletarJogo(id);
    if(deletar){
       res.status(201).json({message: 'Jogo deletado com sucesso!'});
    }else{
        res.status(404).json({error: 'Não foi possivel deletar o jogo'});
    }
});

app.listen(3000,()=>{
    console.log("Servidor rodando na porta 3000");
});

export default app;