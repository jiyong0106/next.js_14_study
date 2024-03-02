import { useRouter } from "next/navigation";
import axios from "axios";

const useUserLogin = (setError) => {
  const router = useRouter();

  const getUserLogin = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/profile", data);
      const result = await res.data;

      c;

      if (userId) {
        const userName = userId.name;
        localStorage.setItem("id", userName);
        router.push("/new");
      } else {
        setError("email", {
          type: "manual",
          message: "이메일을 확인해주세요",
        });
        setError("password", {
          type: "manual",
          message: "비밀번호를 확인해주세요",
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return getUserLogin;
};

export default useUserLogin;
