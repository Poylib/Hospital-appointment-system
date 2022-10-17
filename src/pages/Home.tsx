import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { maincolor } from '../theme';

const Home = () => {
  const [openFade, setOpenFade] = useState(false);
  const [openMain, setOpenMain] = useState(false);
  const [reservationHover, setReservationHover] = useState(false);
  const [checkHover, setCheckHover] = useState(false);
  const loadTime = useRef<NodeJS.Timeout>();
  const navigate = useNavigate();
  useEffect(() => {
    setOpenFade(true);
    loadTime.current = setTimeout(() => {
      setOpenMain(true);
    }, 750);
  }, []);

  const moveReservationHandler: React.MouseEventHandler<HTMLHeadingElement> = e => {
    if (e.target instanceof HTMLHeadingElement) navigate(`/reservation/${e.target.id}`);
  };

  const moveCheckHandler: React.MouseEventHandler<HTMLHeadingElement> = e => {
    if (e.target instanceof HTMLHeadingElement) navigate(`/check/${e.target.id}`);
  };

  return (
    <StyledHome>
      <OpenFade openFade={openFade} />
      {openMain && (
        <>
          <div
            className='main-box reservation-box' //
            onMouseEnter={() => setReservationHover(true)}
            onMouseLeave={() => setReservationHover(false)}
          >
            {reservationHover ? (
              <div className='hover-box' onClick={moveReservationHandler}>
                <h1 id='clinic'>진료</h1>
                <h1 id='checkup'>검진</h1>
                <h1 id='counseling'>상담</h1>
              </div>
            ) : (
              <>
                <h1>예약하기</h1>
                <div>
                  <span>원하는 날짜와 시간을 정해보세요</span>
                </div>
              </>
            )}
          </div>
          <div
            className='main-box check-box' //
            onMouseEnter={() => setCheckHover(true)}
            onMouseLeave={() => setCheckHover(false)}
          >
            {checkHover ? (
              <div className='hover-box' onClick={moveCheckHandler}>
                <h1 id='clientname'>예약자명</h1>
                <h1 id='clientnumber'>예약 번호</h1>
              </div>
            ) : (
              <>
                <h1>예약조회</h1>
                <div>
                  <span>로그인 또는 예약정보로 예약 목록을 조회할 수 있습니다</span>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </StyledHome>
  );
};

export default Home;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledHome = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  height: 100vh;
  overflow-x: hidden;

  .main-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

    h1 {
      animation: ${fadeIn} 1.4s;
      font-size: 100px;
      margin-bottom: 40px;
    }
    span {
      padding: 0 15px;
      animation: ${fadeIn} 1.4s;
      font-size: 25px;
    }
    .hover-box {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100vh;
      &:hover {
        cursor: pointer;
      }
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
    .main-box {
      h1 {
        font-size: 40px;
      }
    }
  }
`;

const OpenFade = styled.div<{ openFade: boolean }>`
  position: absolute;
  left: 100%;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: ${maincolor};
  transition: 1.2s ease-in;
  transform: translateX(${({ openFade }) => (openFade ? '0%' : '-100%')});
`;
