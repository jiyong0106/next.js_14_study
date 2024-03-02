"use client";
import InputUi from "@/components/atomic/input/index";
import ButtonUi from "@/components/atomic/button/index";
import styles from "./login.module.css";
import { useForm } from "react-hook-form";
import { email_reg } from "@/components/util/validation";
import { useFormProps } from "@/types/type";
import useUserLogin from "@/components/api/useSignIn";
import SnsLogin from "@/components/module/sns-login/snsLogin";
import Link from "next/link";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<useFormProps>({ mode: "onBlur" });

  const getUserLogin = useUserLogin(setError);

  return (
    <div className={styles.container}>
      <div className={styles.login_container}>
        <form
          className={styles.form_container}
          onSubmit={handleSubmit(getUserLogin)}
        >
          <div className={styles.input_wrapper}>
            <InputUi
              id="email"
              placeholder="email"
              type="email"
              register={register("email", {
                required: "이메일을 입력해주세요 ",
                pattern: {
                  value: email_reg,
                  message: "이메일 형식이 아닙니다.",
                },
              })}
            />
            <InputUi
              id="password"
              placeholder="password"
              type="password"
              register={register("password", {
                required: "비밀번호를 입력해주세요",
              })}
            />
            <small className={styles.error_text}>
              <p>{errors.email?.message}</p>
              <p>{errors.password?.message}</p>
            </small>
          </div>
          <div className={styles.button_wrapper}>
            <ButtonUi>Login</ButtonUi>
          </div>
        </form>
        <SnsLogin />
        <Link href="/signup">
          <span className={styles.signup_text}>회원 가입하기</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;

// errors: FieldErrors<TFieldValues>
//로그인 시에는 email, password의 정보가 이동하므로 노출되면 문제가 발새해서
//get 방식으로 보내는 것이 아닌 post 방식으로 보내야 한다.=> post는 body에 담아서 보내는 것이다.
//->body에 담으면 노출되지 않는다.

//서버 만들어서 회원가입 하면 정보가 서버에 저장되고,
//로그인 시에는 서버에 저장된 정보와 비교해서 로그인을 할 수 있도록 한다.
