import { UseFormRegisterReturn } from "react-hook-form";
import { HTMLAttributes } from "react";

export interface IParams {
  params: { id: string };
}

export interface MovieProps {
  poster_path: string;
  title: string;
  id: number;
}

export interface inputProps extends HTMLAttributes<HTMLInputElement> {
  id : string;
  placeholder : string;
  type : string;
  register : UseFormRegisterReturn
}

export interface useFormProps {
  email: string;
  password: string;
  passwordConfirm?: string;
} 