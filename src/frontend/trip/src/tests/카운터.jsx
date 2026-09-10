import { useState as 상태사용 } from "react"

export const 카운터 = () => {
  const [ 카운트, 카운트설정 ] = 상태사용(0);
  return (
    <>
      <h1>{카운트}</h1>
      <button onClick={() => 카운트설정(카운트 + 1)}>증가</button>
    </>
  )
}