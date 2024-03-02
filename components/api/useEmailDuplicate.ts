import axios from "@/components/api/axios";

const useEmailDuplicate = (setError) => {
  const isEmailDuplicate = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/profile", data);
      const result = await res.data;

      const isDuplicateEmail = result.find((user) => user.email === data.email);

      if (isDuplicateEmail) {
        setError("email", {
          type: "manual",
          message: "중복된 이메일입니다.",
        });
      }
    } catch (e) {
      console.error(e);
    }
  };
  return isEmailDuplicate;
};

export default useEmailDuplicate;
