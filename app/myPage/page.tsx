"use client";
import ButtonUi from "@/components/atomic/button/index";
import useUserDelete from "@/components/api/useUserDelete";
import { useRouter } from "next/navigation";
const Mypage = () => {
  const getUserDelete = useUserDelete();
  const router = useRouter();
  const deleteUser = () => {
    window.confirm("정말로 탈퇴하시겠습니까?");
    getUserDelete();
    localStorage.removeItem("id");
    router.push("/signin");
  };

  return <ButtonUi onClick={deleteUser}>탈퇴하기</ButtonUi>;
};

export default Mypage;
