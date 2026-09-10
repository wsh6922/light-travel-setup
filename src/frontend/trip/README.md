## 여간행장 팀프로젝트

```jsx
export default function App() {
  return (
    <>
    {/* 스크롤 자동으로 위 */}
    <ScrollToTop />
    <Routes>
      {/* 공용 레이아웃 */}
      <Route element={<Layout />}>
        {/* 메인 */}
        <Route index element={<Index />} />
        {/* 로그인 */}
        <Route path="/login" element={<Login />} />
        {/* 마이페이지 */}
        {/* <Route path="/mypage" element={<UserInfo />} /> */}
        <Route path="/mypage">
          <Route path=":num" element={<UserPage />} />
          <Route path=":num/wish" element={<UserPageWish />} />
          <Route path=":num/buy" element={<UserPageBuyBox />} />
        </Route>
        {/* 도시들 (아마 안 쓸 수도) */}
        <Route path="/citys" element={<CityList />} />
        {/* 검색 결과 */}
        <Route path="/search/:locate" element={<Sub1 />} />
        <Route path="/search/nation" element={<SearchNation />} />
        <Route path="/search/native" element={<SearchNative />} />
        {/* 객실 페이지 */}
        <Route path="/room" element={<Sub3 />}>
          <Route path=":num" element={<Sub3 />} />
        </Route>
        {/* 유저 회원가입 */}
        <Route path="/user-join" element={<UserJoin />} />
        {/* 현지인 회원가입 */}
        <Route path="/native-join" element={<NativeJoin />} />
        <Route path="/native-join1" element={<NativeJoin1 />} />
        {/* 현지인 페이지 */}
        <Route path="/local/*" element={<Local />} />
        {/* 객실 업로드 */}
        <Route path="/upload" element={<Upload />} />
        <Route path="/upload-more" element={<UploadForm />} />
        {/* 이벤트 상세 */}
        <Route path="/event" element={<Event />} />
        {/* 예약하기 */}
        <Route path="/order" element={<Reservation />} />
        {/* 현지인 소개 */}
        <Route path="/native-desc" element={<NativeDesc />} />
      </Route>
      {/* 채팅 */}
      <Route path="/chat" element={<Chat2 />} />
      {/* /test 들은 테스트용 */}
      <Route path="/test">
        <Route path="map" element={<Map />} />
        <Route path="swiper" element={<SwiperTest /> } />
        <Route path="hook" element={<HookTest />} />
        <Route path="chat/:sender/:id" element={<Chat />} />
        <Route path="google" element={<GoogleLoginTest />} />
        <Route path="google2" element={<Test />} />
        <Route path="image" element={<ImageUpload />} />
        <Route path="카운터" element={<Counter />} />
        <Route path="지도" element={<MapKo />} />
        <Route path="타이머" element={<TimerKo />} />
        <Route path="place" element={<Place />} />
        <Route path="dum" element={<ChatDum />} />
      </Route>
      {/* 본인인증 */}
      <Route path="/identify" element={<Identify />} />
      {/* 리뷰 */}
      <Route path="/review" element={<WriteReview />} />
      {/* 404시 메인으로 */}
      <Route path="*" element={<Redirect />} />
    </Routes>
    </>
  )
}
```

---
### 패키지 목록
- @react-google-maps/api
- @react-oauth/google
- @stomp/stompjs
- axios
- quill
- react-quill
- react-helmet-async
- react-router-dom
- swiper

---

### 패키지 설치 명령어
```bash
npm i @react-google-maps/api @stomp/stompjs axios quill react-quill react-helmet-async react-router-dom swiper @react-oauth/google
```