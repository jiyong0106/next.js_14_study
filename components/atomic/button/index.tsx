import styles from './button.module.css'
const ButtonUi = ({children,onClick}) => {
  return (
    <button className={styles.button_Styles} onClick={onClick}>{children}</button>
  )
}

export default ButtonUi