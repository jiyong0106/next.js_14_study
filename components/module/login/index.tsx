import InputUi from "@/components/atomic/input/index";
import ButtonUi from "@/components/atomic/button/index";
import styles from "./login.module.css";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login_container}>
        <form className={styles.form_container}>
          <div className={styles.input_wrapper}>
            <InputUi />
            <InputUi />
          </div>
          <div className={styles.button_wrapper}>
            <ButtonUi />
          </div>
        </form>
      여기에 sns로그인
      </div>
    </div>
  );
};

export default LoginForm;
