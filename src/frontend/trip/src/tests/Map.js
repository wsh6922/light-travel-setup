import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import { useState } from "react";

const styles = {
  width: "100%",
  height: "800px",
};

const myStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "landscape",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];

const center = {
  lat: 37,
  lng: 127,
};

function Map() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleSetMarker = (marker) => {
    setSelectedMarker(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedMarker(null);
  };

  return (
    <main>
      <input onKeyDown={(e) => e.key === "Enter" && console.log(e.target.value)} />
      <LoadScript
        googleMapsApiKey={`${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}
      >
        <GoogleMap
          mapContainerStyle={styles}
          center={center}
          zoom={15}
          options={{ disableDefaultUI: false, styles: myStyles }}
        >
          {[
            {
              name: "₩ 100,000",
              position: {
                lat: 37,
                lng: 127,
              },
            },
            { name: "₩ 200,000", position: { lat: 38, lng: 128 } },
            { name: "₩ 300,000", position: { lat: 37, lng: 128 } },
            { name: "₩ 400,000", position: { lat: 38, lng: 127 } },
            {
              name: "고덕 아남아파트",
              position: { lat: 37.5578508, lng: 127.1459139 },
            },
          ].map((item, index) => (
            <MarkerF
              key={index}
              position={item.position}
              title={item.name}
              label={{
                color: "white",
                text: item.name,
              }}
              onClick={() => handleSetMarker(item)}
            />
          ))}
          {selectedMarker && (
            <InfoWindowF
              position={selectedMarker.position}
              onCloseClick={handleInfoWindowClose}
              options={{
                pixelOffset: new window.google.maps.Size(0, -30),
              }}
            >
              <div>
                <h1 style={{ margin: "0" }}>특가</h1>
                {selectedMarker.name}
              </div>
            </InfoWindowF>
          )}
        </GoogleMap>
      </LoadScript>
    </main>
  );
}

export default Map;
