import styles from "./input.module.css";
import {inputProps} from "@/types/type";

const InputUi = ({ register, id,...rest} : inputProps) => {
  return (
    <input className={styles.input_style} id={id} {...rest} {...register} />
  );
};

export default InputUi;
