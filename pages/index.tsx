import Cartao from "../components/Cartao";
import styles from "../styles/Formulario.module.css"
import Link from "next/link";

export default function Formulario() {
  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao></Cartao>
      </div>
      <div>
        <Cartao></Cartao>
        <Cartao bgcolor="#28a025">
          <Link href={`/jogo/4/2`}>
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