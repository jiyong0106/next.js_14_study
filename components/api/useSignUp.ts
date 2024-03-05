import axios from "@/components/api/axios";
import { useRouter } from "next/navigation";

const useSignUp = () => {
  const router = useRouter();
  const getUserSignUp = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/profile", {
        
        email: data.email,
        name: data.name,
      });
      localStorage.setItem("id", data.userName);
      router.push("/new");
    } catch (e) {
      console.error(e);
    }
  };
  return getUserSignUp;
};

export default useSignUp;