import { useEffect, useState } from "react"
import { data as dummy } from "../dummy/data";
import axios from "axios";

// 더미용
export const useSetDummyData = () => {
  const [ data, setData ] = useState([]);
  useEffect(() => {
    setData(dummy)
  }, [])

  return data
}

/**
 * 입력 받은 URL에 GET 요청을 날리는 훅
 * @param {string} url 스프링부트 GET 매핑 URL
 * @returns 요청 후 받은 데이타
 */
export const useGetData = (url) => {
  const [ data, setData ] = useState(null);
  const [ request, setRequest ] = useState(false);
  useEffect(() => {
    if (!request) {
      setRequest(true)
      axios.get(`${process.env.REACT_APP_URL}${url}`)
      .then(res => setData(res.data))
      .catch(e => console.error(e))
    }

  }, [url, request])

  return data
}

/**
 * url, 전송데이터 입력하면 요청 후 데이터 받는 훅
 * @param {string} url 스프링부트 post 매핑 url
 * @param {Object} postdata 전송할 객체
 * @returns 요청 후 받은 데이터
*/
export const usePostData = (url, postdata) => {
  const [ data, setData ] = useState(null);
  const [ request, setRequest ] = useState(false);
  useEffect(() => {
    if (!request) {
      setRequest(true)
      axios.post(`${process.env.REACT_APP_URL}${url}`, postdata)
      .then(res => setData(res.data))
      .catch(e => console.error(e))
    }
  }, [url, postdata, request])

  return data
}

// 사용 불가
export const useTrigGetData = (url, trigger) => {
  const [ data, setData ] = useState(null);
  const [ trig, setTrig ] = useState(trigger)
  useEffect(() => {
    if (trig) {
      setTrig(!trig)
      axios.get(`${process.env.REACT_APP_URL}${url}`)
      .then(res => setData(res.data))
      .catch(e => console.error(e))
    }
  }, [url, trig])

  return data
}

// 너도 불가
export const useTrigPostData = (url, postdata, trigger) => {
  const [ data, setData ] = useState(null);
  const [ trig, setTrig ] = useState(trigger)
  useEffect(() => {
    if (trig) {
      setTrig(!trig)
      axios.post(`${process.env.REACT_APP_URL}${url}`, postdata)
      .then(res => setData(res.data))
      .catch(e => console.error(e))
    }
  }, [url, postdata, trig])
  return data
}