import { useState } from "react";
import "../../styles/identify.css";

export default function Identify() {
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const hypenTel = (value) => {
    return value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
  };

  const handleInput = (e) => {
    const formattedPhone = hypenTel(e.target.value);
    setPhone(formattedPhone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!birth || !gender || !phone) {
      alert("모든 항목을 입력해주세요.");
      return;
    } else {
      alert("정상 인증되었습니다.");
    }
    if (window.opener) {
      window.opener.postMessage({ birth: birth, gender: gender, phone: phone }, window.location.origin);
      window.close();
    } else {
      console.log("error");
    }
  };

  return (
    <form className="id-form" onSubmit={handleSubmit}>
      <h1 className="idenfify-title">본인인증</h1>
      {/* <hr style={{margin: "0", width: "95%"}} /> */}
      <label className="input label-birth">
        <p>생일을 선택해주세요</p>
        <input
          type="date"
          name="schedule"
          min="1921-01-01"
          max="2024-12-30"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
        />
      </label>
      <label className="input label-gender">
        <p>성별을 선택해주세요</p>
        <div className="radio-group">
          <label className="radio-inline">
            <input
              type="radio"
              name="gender"
              value="남성"
              checked={gender === "남성"}
              onChange={(e) => setGender(e.target.value)}
            />
            남성
          </label>
          <label className="radio-inline">
            <input
              type="radio"
              name="gender"
              value="여성"
              checked={gender === "여성"}
              onChange={(e) => setGender(e.target.value)}
            />
            여성
          </label>
        </div>
      </label>
      <label className="input label-phone">
        <p>전화번호를 입력해주세요</p>
        <input
          type="text"
          value={phone}
          onInput={handleInput}
          maxLength="13"
        />
      </label>
      <button type="submit" className="identify-submit">인증하기</button>
    </form>
  );
}
