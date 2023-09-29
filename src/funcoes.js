const jogos = [
      {id: 1, nome: 'Gears of War 5', plataforma: 'Xbox', ano: 2019},
      {id: 2, nome: 'Forza Motorsport', plataforma: 'Xbox', ano: 2023},
      {id: 3, nome: 'Starfield', plataforma: 'Xbox', ano: 2023}
]

const buscaJogos = () =>{
      return jogos;
}
const buscaporId = (id) =>{
      return jogos.find((jogo)=>jogo.id===parseInt(id));
}
const insereJogo=(jogo)=>{
      return jogos.push(jogo);
}
const atualizarJogo = (id,novoNome,novaPlataforma,novoAno) =>{
      const indice = jogos.findIndex((jogo)=>jogo.id===parseInt(id));
      if(indice!==-1){
        jogos[indice].nome = novoNome;
        jogos[indice].plataforma = novaPlataforma;
        jogos[indice].ano = novoAno;
        return true;
      }else{
        return false;
      }

}
const deletarJogo = (id) =>{
      const indice = jogos.findIndex((jogo)=>jogo.id===parseInt(id));
      if(indice !== -1){
         jogos.splice(indice,1);
         return true;
      }else{
         return false;
      }

}

export {buscaJogos, buscaporId, insereJogo,atualizarJogo, deletarJogo};