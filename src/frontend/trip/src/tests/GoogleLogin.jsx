import { GoogleLogin,  } from "@react-oauth/google"; //googleLogout
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GoogleLoginTest() {
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  const handleLoginSuccess = async (response) => {
    console.log('로그인 성공 :', response);

    // ID Token
    const idToken = response.credential;

    // Verify ID token and fetch user info
    try {
      const res = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`);
      const userInfo = res.data;
      setUser(userInfo);
      console.log('사용자 정보 :', userInfo);

      let result

      try {
        result = await axios.post(`/login/google-check?sub=${userInfo.sub}`)
      } catch (e) {
        console.error(e)
      }

      if (result.data) {
        await axios.post(`/login/google-login?sub=${userInfo.sub}`).then().catch(e => console.error(e))
        window.alert("로그인 되었습니다")
      } else {
        await axios.post(`/login/google-join`, {name: userInfo.name, sub: userInfo.sub, email: userInfo.email}).then(res => console.log(res.data)).catch(e => console.error(e))
        window.alert("회원가입 되었습니다.")
      }
      nav("/")
    } catch (error) {
      console.error('로그인 실패 :', error);
    }

    // try {
    //   const userInfo = await axios.get(`https://people.googleapis.com/v1/people/me?personFields=genders,phoneNumbers&key=${process.env.REACT_APP_GOOGLE_PEOPLE_API_KEY}`, {
    //     headers: {
    //       Authorization: `Bearer ${response.credential}`
    //     }
    //   });
    //   console.log('Additional user info:', userInfo.data);
    // } catch (error) {
    //   console.error('Error fetching additional user info:', error);
    // }
  };

  

  // const handleLogin = useGoogleLogin({
  //   onSuccess: res => handleLoginSuccess(res),
  //   onError: e => handleLoginFailure(e),
  //   flow: "auth-code"
  // })

  const handleLoginFailure = (error) => {
    console.log('로그인 실패 :', error);
  };

  // const handleLogout = () => {
  //   googleLogout();
  //   setUser(null);
  //   console.log('로그아웃');
  // };


  return (
    <div>
      {/* <h1>Google Login</h1> */}
      {user ? (
        // <div>
        //   {/* <h2>환영합니다, {user.name}</h2> */}
        //   <button onClick={handleLogout}>로그아웃</button>
        // </div>
        <></>
      ) : (
        <>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
          // useOneTap
          shape="circle"
          type="icon"
          // auto_select
          />
        {/* <button onClick={() => handleLogin()}>로그인</button> */}
          </>
      )}
    </div>
  );
};