import styles from "./index.module.css"

export default function Button({children, href, className}) {
  return (
    <a target="" href={href}>
      <button className={`${styles.botao} ${className}`}>{children}</button>
    </a>
  )
}