import { useNavigate } from "react-router-dom"

export default function Ad({ images }) {
  const nav = useNavigate()
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return (
    <div className="ad" style={{backgroundImage: `url('${process.env.PUBLIC_URL}${randomImage}')`, backgroundSize: "cover"}} onClick={() => nav("/event")} />
  )
}