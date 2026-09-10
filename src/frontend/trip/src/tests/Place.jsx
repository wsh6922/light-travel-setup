// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Place = () => {
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await axios.get('/hotels'); // 서버의 엔드포인트로 요청
//         setHotels(response.data.results);
//         console.log(response.data.results)
//       } catch (error) {
//         console.error('Error fetching hotel data:', error);
//       }
//     };

//     fetchHotels();
//   }, []);

//   return (
//     <div>
//       <h2>Hotels</h2>
//       <ul>
//         {hotels.map((hotel, index) => (
//           <li key={index}>{hotel.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Place;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Place = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('/hotels'); // 서버의 엔드포인트로 요청
        // const hotelData = JSON.parse(response.data); // JSON 문자열을 객체로 변환
        console.log(response.data.results)
        setHotels(response.data.results);
      } catch (error) {
        console.error('Error fetching hotel data:', error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div>
      <h2>Hotels in 아남아파트</h2>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            <h3>{hotel.name}</h3>
            <p>주소: {hotel.formatted_address}</p>
            <p>평점: {hotel.rating} ({hotel.user_ratings_total} 리뷰)</p>
            {hotel.photos && (
              <img
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${hotel.photos[0].photo_reference}&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}
                alt={hotel.name}
              />
            )}
            <p>종류: {hotel.types.join(', ')}</p>
            {hotel.opening_hours && (
              <p>영업 시간: {hotel.opening_hours.open_now ? '열림' : '닫힘'}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Place;
