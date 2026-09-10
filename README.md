<div align="center">

## ✈️ 여간행장 (Light travel setup)

**여행 중에 가지고 다니는 물건, 여행자와 현지인을 연결하는 플랫폼**

도시별 숙소 검색, 지도 기반 위치 확인, 현지인 호스트 페이지, 예약, 리뷰,
찜 목록, 실시간 채팅을 제공하는 React + Spring Boot 기반 웹 서비스입니다.

</div>

> `Capstone Design roject` 🥈 교내 창업아이디어 경진대회 우수상 | 2024.03 ~ 2024.07

---

### 📌 목차

- [프로젝트 소개](#-프로젝트-소개)
- [주요 기능](#-주요-기능)
- [기술 스택](#-기술-스택)
- [폴더 구조](#-폴더-구조)
- [팀 소개](#-팀-소개)
- [수상](#-수상)

---

### 🎯 프로젝트 소개

여행자는 숙소를 예약할 때 가격과 위치뿐 아니라 실제 현지 정보를 함께 확인하고 싶어합니다.
하지만 일반적인 숙소 예약 서비스에서는 지역 경험을 가진 사람과 직접 연결되기 어렵고,
숙소 정보, 지도, 예약, 후기, 문의 흐름이 분리되어 있어 사용자가 여러 화면을 오가야 합니다.

**여간행장**은 이 흐름을 하나의 서비스 안에서 연결합니다.

1. **도시, 숙소 탐색** - 도시별 숙소 목록과 추천 숙소를 확인하고 상세 페이지로 이동
2. **지도 기반 위치 확인** - Google Maps로 숙소 위치를 시각적으로 탐색
3. **현지인 연결** - 현지인 페이지를 통해 여행자와 현지인을 연결
4. **예약, 리뷰, 채팅** - 예약, 마이페이지, 후기 작성, 실시간 채팅까지 한 번에 처리

---

### ✨ 주요 기능

| 기능                        | 설명                                                                   |
| --------------------------- | ---------------------------------------------------------------------- |
| **숙소 검색**               | 도시명, 국가/도시 기준으로 숙소 목록을 조회하고 평점, 위치 정보를 확인 |
| **지도 기반 탐색**          | Google Maps API로 숙소 위치를 지도에 표시하고 선택한 숙소 상세로 이동  |
| **일반 회원/현지인 회원**   | 일반 여행자와 현지인 계정을 구분해 가입, 로그인 흐름 제공              |
| **로그인 & 구글 로그인**    | 자체 로그인과 Google OAuth 기반 로그인/회원가입 흐름 구현              |
| **객실/현지인 페이지 등록** | 현지인이 숙소 객실과 소개 페이지를 등록하고 이미지를 업로드            |
| **예약 관리**               | 숙소 상세에서 예약을 생성하고 마이페이지에서 예약 내역 확인 및 취소    |
| **리뷰 작성**               | 예약/이용 후 별점과 후기, 리뷰 이미지를 등록                           |
| **찜 목록**                 | 관심 숙소를 찜하고 마이페이지에서 다시 확인                            |
| **실시간 채팅**             | STOMP over WebSocket으로 여행자와 현지인 간 메시지 송수신              |
| **이미지 업로드**           | 숙소, 현지인 프로필, 리뷰 이미지를 서버 로컬 업로드 폴더에 저장        |

---

### 💻 기술 스택

### 🌑 Backend

![Java](https://img.shields.io/badge/Java-ED8B00?style=flat&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat&logo=springboot&logoColor=white)
![Spring Web MVC](https://img.shields.io/badge/Spring%20Web%20MVC-6DB33F?style=flat&logo=spring&logoColor=white)
![Spring Data JPA](https://img.shields.io/badge/Spring%20Data%20JPA-6DB33F?style=flat&logo=spring&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=flat&logo=springsecurity&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=flat&logo=socketdotio&logoColor=white)
![STOMP](https://img.shields.io/badge/STOMP-4B5563?style=flat)
![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=flat&logo=hibernate&logoColor=white)
![Lombok](https://img.shields.io/badge/Lombok-BC4521?style=flat)
![Jackson](https://img.shields.io/badge/Jackson-2F7E9F?style=flat)

### 🌕 Frontend

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Create React App](https://img.shields.io/badge/Create%20React%20App-09D3AC?style=flat&logo=createreactapp&logoColor=white)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=flat&logo=reactrouter&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white)
![Google Maps](https://img.shields.io/badge/Google%20Maps-4285F4?style=flat&logo=googlemaps&logoColor=white)
![Google OAuth](https://img.shields.io/badge/Google%20OAuth-4285F4?style=flat&logo=google&logoColor=white)
![WebSocket](https://img.shields.io/badge/WebSocket-010101?style=flat&logo=socketdotio&logoColor=white)
![STOMP.js](https://img.shields.io/badge/STOMP.js-4B5563?style=flat)
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat&logo=swiper&logoColor=white)
![Quill](https://img.shields.io/badge/Quill-52B0E7?style=flat)

### 🌓 Development

![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=flat&logo=mariadb&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white)
![ERDCloud](https://img.shields.io/badge/ERDCloud-2563EB?style=flat)

### 🌟 Build

![Gradle](https://img.shields.io/badge/Gradle-8.7-02303A?style=flat&logo=gradle&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)

### 🌠 Productivity

![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat&logo=discord&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)

---

### 📂 폴더 구조

```text
Yeogan
├── src/
│   ├── main/
│   │   ├── java/project/web/
│   │   │   ├── WebApplication.java       # Spring Boot 진입점
│   │   │   ├── config/                   # Web, Security, WebSocket 설정
│   │   │   ├── controller/               # REST API / WebSocket 컨트롤러
│   │   │   └── data/
│   │   │       ├── domain/               # JPA Entity
│   │   │       ├── dto/                  # 요청/응답 DTO
│   │   │       ├── repository/           # Spring Data JPA Repository
│   │   │       └── service/              # 비즈니스 로직
│   │   └── resources/
│   │       └── application.properties
│   │
│   ├── frontend/
│   │   ├── trip/                         # React 메인 프론트엔드 앱
│   │   │   ├── public/                   # 정적 리소스
│   │   │   ├── src/
│   │   │   │   ├── components/           # 공통 컴포넌트
│   │   │   │   ├── layout/               # Header, Footer, Layout
│   │   │   │   ├── pages/                # 화면 단위 페이지
│   │   │   │   ├── styles/               # CSS 스타일
│   │   │   │   ├── tests/                # 기능 테스트/실험 컴포넌트
│   │   │   │   └── utils/                # 로그인/API 유틸
│   │   │   ├── package.json
│   │   │   └── package-lock.json
│   │   │
│   │   └── pra/
│   │
│   └── test/                             # Spring 테스트 코드
│
├── uploads/                              # 이미지 로컬 업로드 저장소
├── gradle/wrapper/                       # Gradle Wrapper
├── gradlew
├── gradlew.bat
└── settings.gradle
```

---

### 🏠 팀 소개

<table>
  <thead>
    <tr>
      <th style="border: 2px solid black; text-align: center; background-color: #f2f2f2;" colspan="6">여간행장</th>
    </tr>
  </thead>
  <tbody>
    <tr align="center">
      <td style="border: 2px solid black;">
        <a href="https://github.com/HaHoLuLa" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/99785535?v=4" width="100px;" alt style="max-width: 100%;">
          <br>
          <sub>이주현</sub>  
      </td>
      <td style="border: 2px solid black;">
        <a href="https://github.com/Maneicel" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/225567477?v=4" width="100px;" alt style="max-width: 100%;">
          <br>
          <sub>김윤</sub>  
      </td>
      <td style="border: 2px solid black;">
        <a href="https://github.com/KimSeungminDev" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/149455239?v=4" width="100px;" alt style="max-width: 100%;">
          <br>
          <sub>김승민</sub>  
      </td>
      <td style="border: 2px solid black;">
        <a href="https://github.com/qqssddaaww" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/132414544?v=4" width="100px;" alt style="max-width: 100%;">
          <br>
          <sub>김우진</sub>  
      </td>
      <td style="border: 2px solid black;">
        <a href="" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/182948012?v=4" width="100px;" alt style="max-width: 100%;">
          <br>
          <sub>김지윤</sub>  
      </td>
      <td style="border: 2px solid black;">
        <a href="https://github.com/wsh6922" target="_blank">
          <img src="https://avatars.githubusercontent.com/u/133782100?v=4" width="100px;" alt style="max-width: 100%;">
          <br>
          <sub>김남욱</sub>  
      </td>
    </tr>
  </tbody>
</table>

<br>

---

### 🏆 수상

| 대회                                                 | 수상      | 연도 |
| ---------------------------------------------------- | --------- | ---- |
| 교내 창업아이디어 경진대회 우수상                    | 🥈 우수상 | 2024 |
| 2024 학생리그 학생 창업유망팀 예비트랙 300+ 최종선정 |           | 2024 |
