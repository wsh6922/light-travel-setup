import { GoogleLogin } from "@react-oauth/google"

export const Test = () => {
  return (
    <GoogleLogin 
      onSuccess={(res) => console.log("Sucess : ", res)}
      onError={(res) => console.log("Error : ", res)}
    />
  )
}