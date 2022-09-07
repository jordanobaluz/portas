import styles from "../styles/Cartao.module.css"

interface CartaoProps {
    bgcolor?: string
}

export default function Cartao(props) {
    return (
        <div className={styles.cartao}
            style={{
                backgroundColor: props.bgcolor ?? "#eee"
            }}
        >
            {props.children}
        </div>
    )
}