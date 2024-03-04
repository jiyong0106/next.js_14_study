"use client";
import InputUi from "@/components/atomic/input/index";
import ButtonUi from "@/components/atomic/button/index";
import styles from "./signup.module.css";
import { useForm } from "react-hook-form";
import { email_reg, password_reg } from "@/components/util/validation";
import { useFormProps } from "@/types/type";
import SnsLogin from "@/components/module/sns-login/snsLogin";
import Link from "next/link";
import useEmailDuplicate from "@/components/api/useEmailDuplicate";
import useSignUp from "@/components/api/useSignUp";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm<useFormProps>({ mode: "onBlur" });

  const isEmailDuplicate = useEmailDuplicate(setError);

  const getUserSignUp = useSignUp();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div className={styles.container}>
      <div className={styles.login_container}>
        <form
          className={styles.form_container}
          onSubmit={handleSubmit(getUserSignUp)}
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
                onBlur: (e) => isEmailDuplicate(e.target.value),
              })}
            />
            <InputUi
              id="password"
              placeholder="password"
              type="password"
              autoComplete="off"
              register={register("password", {
                required: "비밀번호를 입력해주세요",
                pattern: {
                  value: password_reg,
                  message:
                    "비밀번호는 8자 이상, 영문, 숫자, 특수문자를 포함해야합니다.",
                },
              })}
            />
            <InputUi
              id="passwordConfirm"
              placeholder="password Confirm"
              type="password"
              autoComplete="off"
              register={register("passwordConfirm", {
                required: "비밀번호를 입력해주세요",
                validate: (value) =>
                  value === watch("password")
                    ? true
                    : "비밀번호가 일치하지 않습니다.",
              })}
            />
            <InputUi
              id="userName"
              placeholder="userName"
              type="text"
              autoComplete="off"
              register={register("userName", {
                required: "이름을 입력해주세요"
              })}
            />
            <small className={styles.error_text}>
              {errors.email && <p>{errors.email.message}</p>}
              {errors.password && <p>{errors.password.message}</p>}
              {errors.passwordConfirm && (
                <p>{errors.passwordConfirm?.message}</p>
              )}
              {errors.userName && <p>{errors.userName.message}</p>}
            </small>
          </div>
          <div className={styles.button_wrapper}>
            <ButtonUi>회원가입</ButtonUi>
          </div>
        </form>
        <SnsLogin />
        <Link href="/signin">
          <span className={styles.signup_text}>로그인 하기</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
