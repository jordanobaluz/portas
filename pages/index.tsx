import { useState } from "react";
import Porta from "../components/Porta";
import Presente from "../components/Presente";
import { atualizarPortas, criarPortas } from "../functions/portas";
import PortaModel from "../model/porta";

export default function Home() {
  const [portas, setPortas] = useState(criarPortas(3, 2))

  function renderizarPorta() {
    return portas.map(porta => {
      return <Porta key={porta.numero} value={porta}
        onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }

  return (
    <div style={{ display: "flex" }}>
      {renderizarPorta()}
    </div>
  )
}


// {/* pode ser passado definindo ou não a propriedades true e false */}
//       {/* olhar para o componente como um imput, onde é passado valor e modificado */}
//       <Porta value={p1} onChange={novaPorta => setP1(novaPorta)} />