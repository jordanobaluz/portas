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
    const [valido, setValido] = useState(false)

    //faz a tentagem se os valores de entrada são validos
    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        const qtdePortasValida = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >= 1 && temPresente <= portas

        setValido(qtdePortasValida && temPresenteValido)

    }, [portas])

    //após ser montado vazio, será detectado os valores da url e chamado novamene
    useEffect(() => {
        //recebe o valor passado por URL, converte para number
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])


    //renderiza portas somente se valor de valido for falso
    function renderizarPorta() {
        return valido && portas.map(porta => {
            return <Porta key={porta.numero} value={porta}
                onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
        })
    }
    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ? renderizarPorta() : <h1>Valores Inválidos</h1>}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar Jogo</button>
                </Link>
            </div>
        </div>
    )
}