import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import Check from '../components/main/check';
import Reservation from '../components/main/reservaion';
import { maincolor } from '../theme';
const Home = () => {
  const openingRef = useRef();
  const [FadeTime, setFadeTime] = useState(false);
  useEffect(() => {});
  return (
    <>
      <Header />
      <StyledHome>
        <OpenFade />
        <div className='main-box reservation-box'>
          <h1>예약하기</h1>
          <div>
            <span>원하는 날짜와 시간을 정해보세요</span>
          </div>
        </div>
        <div className='main-box check-box'>
          <h1>예약조회</h1>
          <div>
            <span>로그인 또는 예약정보로 예약 목록을 조회할 수 있습니다</span>
          </div>
        </div>
      </StyledHome>
    </>
  );
};
export default Home;

const StyledHome = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100vh;

  .main-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    h1 {
      font-size: 100px;
      padding-bottom: 40px;
    }
  }
  .reservation-box {
    width: 50%;
    color: ${maincolor};
  }
  .check-box {
    width: 50%;
    background-color: ${maincolor};
    z-index: 10;
    color: white;
  }
  @media screen and (max-width: 875px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .main-box {
      h1 {
        font-size: 20px;
      }
    }
  }
`;

const OpenFade = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  z-index: 15;
  width: 100%;
  height: 100%;
  background-color: ${maincolor};
`;
