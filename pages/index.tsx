import { useState } from "react";
import Porta from "../components/Porta";
import Presente from "../components/Presente";
import { atualizarPortas, criarPortas } from "../functions/portas";
import PortaModel from "../model/porta";

export default function Home() {
  return (
    <h1>Tela de inicio do jogo</h1>
  )
}


// {/* pode ser passado definindo ou não a propriedades true e false */}
//       {/* olhar para o componente como um imput, onde é passado valor e modificado */}
//       <Porta value={p1} onChange={novaPorta => setP1(novaPorta)} />