import Cartao from "../components/Cartao";
import styles from "../styles/Formulario.module.css"
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Qde Portas?" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)}></EntradaNumerica>
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Porta com Presente?" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}></EntradaNumerica>
        </Cartao>
        <Cartao bgcolor="#28a025">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}


// {/* pode ser passado definindo ou não a propriedades true e false */}
//       {/* olhar para o componente como um imput, onde é passado valor e modificado */}
//       <Porta value={p1} onChange={novaPorta => setP1(novaPorta)} />