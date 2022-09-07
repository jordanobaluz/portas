import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Porta from "../../../components/Porta"
import { atualizarPortas, criarPortas } from "../../../functions/portas"
import styles from "../../../styles/Jogo.module.css"

export default function jogo() {
    //router pega os parametros passados pela URL
    const router = useRouter()
    const [portas, setPortas] = useState([])

    //após ser montado vazio, será detectado os valores da url e chamado novamene
    useEffect(() => {
        //recebe o valor passado por URL, converte para number
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])


    function renderizarPorta() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }
    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPorta()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}