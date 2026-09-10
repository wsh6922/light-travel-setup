import { StarRating } from "../../../components/Recommend"

export default function Location({title, sub, data}) {
  return (
    <div className="location">

      <div className="location-title">
        <h2>{title}</h2>
        <span>{sub}</span>
      </div>

      <div className="location-container">

        {data.map((item, index) => (

          
          <div className="location-object" key={index}>
          <div style={{backgroundImage: `url('${item.hurl}')`}}></div>
          <div style={{}}>
            <h3 style={{whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",}}>{item?.hname}</h3>
            <span>

            <StarRating rating={item?.rate} />&nbsp;{item?.rate}
            </span>
          </div>
        </div>
        ))}

      </div>
    </div>
  )
}