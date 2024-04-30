import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/authContext"

const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const signup = async ({ fullName, email, password, confirmPassword, mobileNo }) => {
    const success = handleInputErrors({ fullName, email, password, confirmPassword, mobileNo })
    if (!success) return;

    setLoading(true)

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password, confirmPassword, mobileNo })
      })

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error)
      }
      localStorage.setItem("user", JSON.stringify(data))
      setAuthUser(data)
      toast.success("Signup Successfully")

    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, signup }
}

export default useSignup

function handleInputErrors({ fullName, email, password, confirmPassword, mobileNo }) {
  if (!fullName || !email || !password || !confirmPassword || !mobileNo) {
    toast.error("Please fill all the required fields")
    return false;
  }

  if (password !== confirmPassword) {
    toast.error('Password do not match')
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters")
    return false;
  }

  return true;
}