# pre-onboarding-lululab

## 적용기술

- JavaScript
- React.js
- TypeScript

  <br/>
  <br/>

## 라이브러리

- styled-components
- styled-reset
- react-icons
- react-router-dom
- react-datepicker
- prettier
- axios

  <br/>
  <br/>

# 프로젝트 설치 및 실행 방법

## ✅ 설치방법

1. Node.JS를 다운받아 설치해주세요. vite를 사용하였기 때문에 최소 14.18 버전 이상이 요구됩니다.

```
https://nodejs.org/
```

<br/>

2. 리포지토리를 클론해주세요.<br/>

```
git clone https://github.com/Poylib/pre-onboarding-lululab.git
```

<br/>

3.dependencies를 설치해주세요.

```
npm install
```

<br/>
<br/>

## ✅ 실행방법

1. 다음 명령어를 이용해 Dev server를 실행시켜주세요.

```
npm run dev
```

<br/>

2. 브라우저에서 http://localhost:3000/ 로 접속하거나,
[배포주소](https://hospital-appointment-system-navy.vercel.app/)로 접속해주시면 됩니다.

   <br/>
   <br/>
   <br/>

# 저작권, 라이선스 정보

[저작권] (주)룰루랩
<br/>

- ✅ 프로젝트내 이미지는 모두 (주)룰루랩 에서 제공받았습니다.
  <br/>
  <br/>

# 주요기능 및 설명

## ✅ 메인화면

메인화면에서 예약과 조회로 나눠 선택하도록 했습니다.
<img width="1440" alt="Screen Shot 2022-10-20 at 6 57 21 AM" src="https://user-images.githubusercontent.com/100523313/196813333-ba902f90-89b3-4d93-a1f3-67e8c4af8a46.png">

## ✅ 예약하기

메인화면에서 원하는 예약사항을 고르면 캘린더로 예약 날짜와 시간을 선택합니다. 날짜를 선택할 때마다 해당 날짜에 이미 예약된 시간이 있는지 확인하고 UI에서 제외시킵니다
<img width="1440" alt="Screen Shot 2022-10-20 at 6 57 32 AM" src="https://user-images.githubusercontent.com/100523313/196813679-ea4478cd-d0bc-4888-a8a9-29c5bfe33186.png">

날짜를 선택하고나면 개인정보를 입력합니다. 이때 이미 예약한 사람인지, 노쇼했던 사람인지 확인해서 예약되지 않도록 합니다.  
정상적으로 예약을 끝마쳤다면 예약번호가 나옵니다.

<img width="580" alt="Screen Shot 2022-10-20 at 7 09 44 AM" src="https://user-images.githubusercontent.com/100523313/196814323-88f3424a-758d-438f-b4ca-a51d39dee140.png">

## ✅ 예약조회하기

예약은 예약번호로 조회하거나, 개인정보를 입력해 조회할 수 있습니다.
<img width="696" alt="Screen Shot 2022-10-20 at 7 12 52 AM" src="https://user-images.githubusercontent.com/100523313/196814788-c50fdee5-1bd8-4a88-b493-6956062a13bd.png">
<img width="540" alt="Screen Shot 2022-10-20 at 7 11 53 AM" src="https://user-images.githubusercontent.com/100523313/196815024-16a43f56-0552-4ec0-bbdd-481b9831a29b.png">

## ✅ 예약삭제하기

조회한 예약정보를 삭제할 수 있습니다.
<img width="829" alt="Screen Shot 2022-10-20 at 7 12 08 AM" src="https://user-images.githubusercontent.com/100523313/196815080-fb8b7ea0-dd4f-4525-b565-ac3e7f13c46c.png">
