import styles from "./index.module.css"
import Button from "../../components/Button"
import Box from "../../components/TextBox"

export default function Localizacao() {
  return (
    <div className={styles.retangulo}>
        <h2>Seu endereço atual</h2>
        <Box placeholder="Digite seu endereço"></Box>
        <Button className={styles.confirmarEndereco}>Confirmar endereço</Button>
    </div>
  )
}
