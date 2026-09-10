import { useState as 상태사용, useEffect as 효과사용 } from "react"

export const 타이머 = () => {
  const [ 시간, 시간설정 ] = 상태사용(0)
  const 인터벌설정 = setInterval
  const 인터벌청소 = clearInterval
  const 콘솔출력 = console.log

  효과사용(() => {
    const 인터벌 = 인터벌설정(() => {
      시간설정(이전값 => 이전값 + 1)
    }, 1000)

    // 이 부분 없으면 숫자 2씩 증가됨
    return () => {
      인터벌청소(인터벌)
      콘솔출력("언마운트")
    }
  }, [])

  return <span>{시간}</span>
}