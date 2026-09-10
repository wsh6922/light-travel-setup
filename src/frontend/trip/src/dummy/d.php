<!DOCTYPE html>
<html>
<head>
    <title>Google Maps 지역 검색 및 클릭 이벤트</title>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPwUFI4q6M9ZgjGSYsnaPetotuJwSsu3c"></script>
    <style>
        table {
            border-collapse: collapse;
        }
        table, tr, th, td {
            padding: 5px;
            border: solid 1px black;
        }
    </style>
</head>
<body>
    <div>
        <input style="width: 1150px; height: 30px;" type="text" id="location-input" placeholder="지역을 검색하세요">
        <button style="height: 30px;" id="search-button">검색</button>
    </div>
    <br>
    <!-- <br><br> -->
    <div id="map" style="width: 1200px; height: 500px;"></div>
    <p id="clicked-coordinates"></p>
    <p id="location-name"></p>
    <p id="search-center"></p>
    <img id="street-view-image">

    <form id="myForm" action="location_upload.php" method="POST">
      <input type="hidden" name="lati" id="aInput">
      <input type="hidden" name="long" id="bInput">
      <input type="hidden" name="name" id="cInput">
      <input type="hidden" name="search" id="dInput">
      <input type="submit" value="전송" onclick="submitForm()">
    </form>
    <br>
    <script>
        var map;
        var clickedCoordinates = document.getElementById("clicked-coordinates");
        var locationName = document.getElementById("location-name");
        var streetViewImage = document.getElementById("street-view-image");
        var searchCenter = document.getElementById("search-center");

        var aaa;
        var bbb;
        var ccc;

        function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 37.55181454740766,
                    lng: 126.9917937
                },
                zoom: 10
            });

            map.addListener('click', function(event) {
                var lat = event.latLng.lat();
                var lng = event.latLng.lng();
                clickedCoordinates.innerHTML = '위도: ' + lat + ', 경도: ' + lng;

                aaa = lat;
                bbb = lng;

                // Reverse geocoding to get location name
                var geocoder = new google.maps.Geocoder();
                var latLng = new google.maps.LatLng(lat, lng);
                geocoder.geocode({ 'location': latLng }, function(results, status) {
                    if (status === 'OK') {
                        if (results[0]) {
                            locationName.innerHTML = '위치 이름: ' + results[0].formatted_address;

                            ccc = results[0].formatted_address;

                            // Display Street View image
                            displayStreetViewImage(lat, lng);
                        } else {
                            locationName.innerHTML = '위치 이름을 찾을 수 없음';
                        }
                    } else {
                        locationName.innerHTML = '지오코딩에 실패했습니다. 상태: ' + status;
                    }
                });
            });
        }

        function submitForm() {
            // 폼의 숨겨진 입력 필드에 변수 a와 b의 값을 설정
            document.getElementById("aInput").value = aaa;
            document.getElementById("bInput").value = bbb;
            document.getElementById("cInput").value = ccc;
            document.getElementById("dInput").value = document.getElementById('location-input').value;
        }

        function displayStreetViewImage(lat, lng) {
            var streetViewService = new google.maps.StreetViewService();
            var streetViewLocation = new google.maps.LatLng(lat, lng);

            streetViewService.getPanorama({ location: streetViewLocation, radius: 50 }, function(data, status) {
                if (status === 'OK') {
                    var streetViewUrl = data.location.pano;
                    streetViewImage.src = `https://maps.googleapis.com/maps/api/streetview?size=400x400&pano=${streetViewUrl}&key=AIzaSyC5b-Se8Qvj6x5riE0xzq9g-HNq9nGfLek`;
                } else {
                    streetViewImage.src = ''; // Street View 이미지를 찾을 수 없는 경우 이미지 요소를 비웁니다.
                }
            });
        }

        document.getElementById('search-button').addEventListener('click', function() {
            var locationInput = document.getElementById('location-input').value;
            if (locationInput) {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'address': locationInput }, function(results, status) {
                    if (status === 'OK' && results[0].geometry) {
                        var location = results[0].geometry.location;
                        // searchCenter.innerHTML = location;

                        clickedCoordinates.innerHTML = '위도: ' + location.lat() + ', 경도: ' + location.lng();

                        aaa = location.lat();
                        bbb = location.lng();
                        
                        var geocoder = new google.maps.Geocoder();
                        var latLng = location;
                        geocoder.geocode({ 'location': latLng }, function(results, status) {
                            if (status === 'OK') {
                                if (results[0]) {
                                    locationName.innerHTML = '위치 이름: ' + results[0].formatted_address;
                                
                                    ccc = results[0].formatted_address;
                                
                                    // Display Street View image
                                    displayStreetViewImage(lat, lng);
                                } else {
                                    locationName.innerHTML = '위치 이름을 찾을 수 없음';
                                }
                            } else {
                                locationName.innerHTML = '지오코딩에 실패했습니다. 상태: ' + status;
                            }
                        });

                        map.setCenter(location);
                        map.setZoom(15);
                    } else {
                        alert('지역을 찾을 수 없습니다.');
                    }
                });
            } else {
                alert('검색어를 입력하세요.');
            }
        });
    </script>

    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPwUFI4q6M9ZgjGSYsnaPetotuJwSsu3c&callback=initMap">
    </script>
<table style="width: 1200px;">
    <tr>
        <th>번호</th><th>이름</th><th>위도</th><th>경도</th><th>주소</th><th>삭제</th>
    </tr>
<?php
require("db_connect.php");
$result = $db->query("select * from locations");

while ($row = $result->fetch()) {
?>
	<tr>
		<td style="text-align: center;"><?= $row["id"] ?></td><td style="text-align: center;"><?= $row["search"] ?></td><td><?= $row["latitude"] ?></td><td><?= $row["longitude"] ?></td><td><?= $row["location_name"] ?></td><td style="text-align:center; user-select: none;" onclick="location.href='location_delete.php?id=<?= $row[0] ?>'">삭제</td>
	</tr>
<?php
}
?>
<table>
</body>
</html>