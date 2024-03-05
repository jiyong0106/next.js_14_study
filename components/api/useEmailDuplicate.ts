import axios from "@/components/api/axios";

const useEmailDuplicate = (setError) => {
  const isEmailDuplicate = async (email) => {
    try {
      const res = await axios.post("/profile", {email});
      const result = res.data;

      const isDuplicateEmail = result.find((user) => user.email === email);

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
