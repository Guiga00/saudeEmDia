import styles from "./index.module.css"
import Button from "../../components/Button"
import Box from "../../components/TextBox"

export default function Cadastro({cabecalho, subtitulo}) {
  return  (
      <div className={styles.retangulo}>
        <section className={styles.section1}>
          <div className={styles.titulo}>
            <h1>{cabecalho}</h1>
            <p>{subtitulo}</p>
          </div>

          <div className={styles.caixas}>
            <p>Nome completo:</p>
            <Box placeholder="Digite seu nome:"></Box>
            <p>Email:</p>
            <Box placeholder="Digite seu email:"></Box>
            <p>Senha:</p>
            <Box placeholder="Digite sua senha:"></Box>
          </div>

          <div className={styles.botoes}>
            <Button href="">Cadastrar</Button>
          </div>

          <p className={styles.cadastro}>Já tem uma conta? <a className={styles.cadastroLink}>Entre uma aqui</a></p>
        </section>
        <img className={styles.linha} src="/Line 3.svg"/>
        <section className={styles.section2}>
          <img className={styles.imagem} src="/Logo.svg"/>
          <h1>Saúde em Dia</h1>
          <p>Uma aplicação focada em trazer maior velocidade e conforto nas horas mais difíceis.</p>
        </section>
      
    </div>
  )
}