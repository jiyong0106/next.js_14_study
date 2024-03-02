import styles from './button.module.css'
const ButtonUi = ({children}) => {
  return (
    <button className={styles.button_Styles}>{children}</button>
  )
}

export default ButtonUi