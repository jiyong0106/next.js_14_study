import styles from './button.module.css'
import {IForm} from '@/types/type'
const ButtonUi = ({children,onClick} :IForm) => {
  return (
    <button className={styles.button_Styles} onClick={onClick}>{children}</button>
  )
}

export default ButtonUi