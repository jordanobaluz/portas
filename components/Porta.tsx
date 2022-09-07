import styles from "../styles/Porta.module.css"
import PortaModel from "../model/porta"

interface PortaProps {
    value: PortaModel
    onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
    const porta = props.value
    //vai selecionar a porta apenas quando não estiver aberta
    const selecionada = porta.selecionada && !porta.aberta ? styles.selecionada : ''

    // chama o metodo dentro do modelo, para modificar a porta
    const alternarSelecao = e => props.onChange(porta.alternaSelecionada())
    const abrir = e => {
        e.stopPropagation()
        props.onChange(porta.abrir())
    }

    function renderizarPorta() {
        {/* irá definidir 2 classes para ser aplicada a div */ }
        return (
            <div className={styles.porta}>
                <div className={styles.numero}>{porta.numero}</div>
                <div className={styles.macaneta}
                    onClick={abrir}></div>
            </div>

        )
    }

    return (
        <div className={styles.area} onClick={alternarSelecao}>
            <div className={`${styles.estrutura} ${selecionada}`}>
                {porta.aberta ? false : renderizarPorta()}
            </div>
            <div className={styles.chao}></div>
        </div >
    )
}