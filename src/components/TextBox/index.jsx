import styles from "./index.module.css"

export default function Box({ children, className, placeholder }) {
  return (
    <input 
      className={`${styles.caixa} ${className}`} 
      placeholder={placeholder} 
    >
      {children}
    </input>
  )
}
