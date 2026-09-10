import { GoogleMap as 구글맵, useJsApiLoader as 에이피아이로더 } from "@react-google-maps/api";
import { useCallback as 콜백사용, useState as 상태사용 } from "react";

export const 지도 = () => {
  const 컨테이너스타일 = {
    width: "400px",
    height: "400px",
  };

  const 중앙 = {
    lat: 37,
    lng: 127,
  };

  const { isLoaded: 로드됬니, loadError: 로드에러 } = 에이피아이로더({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
    language: 'ko',
    region: "KR"
  });

  const [ 지도, 지도설정 ] = 상태사용(null);

  const 로드시 = 콜백사용((지도) => {
    const 바운드들 = new window.google.maps.LatLngBounds(중앙);
    지도.fitBounds(바운드들);
    지도설정(지도);
  }, []);

  const 마운트시 = 콜백사용(() => {
    지도설정(null);
  }, []);

  if (로드에러) {
    return <div>맵 로딩 실패</div>;
  }

  return 로드됬니 ? (
    <구글맵
      mapContainerStyle={컨테이너스타일}
      center={중앙}
      zoom={10}
      onLoad={로드시}
      onUnmount={마운트시}
    />
  ) : (
    <div>로딩중...</div>
  );
};
