import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { maincolor } from '../theme';
import { fadeIn, fadeOut } from '../util/Animation';

const Home = () => {
  const [openFade, setOpenFade] = useState(false);
  const [openMain, setOpenMain] = useState(false);
  const [closeCheck, setCloseCheck] = useState(false);
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
    setCloseCheck(true);
    setTimeout(() => {
      if (e.target instanceof HTMLHeadingElement) navigate(`/dateinput/${e.target.id}`);
    }, 700);
  };

  const moveCheckHandler: React.MouseEventHandler<HTMLHeadingElement> = e => {
    if (e.target instanceof HTMLHeadingElement) navigate(`/check/${e.target.id}`);
  };

  return (
    <StyledHome //
      closeCheck={closeCheck}
    >
      <OpenFade openFade={openFade} />
      {openMain && (
        <>
          <div
            className='main-box reservation-box' //
            onClick={() => setReservationHover(true)}
            onMouseLeave={() => setReservationHover(false)}
          >
            {reservationHover ? (
              <div className='hover-box fadeout-reservation' onClick={moveReservationHandler}>
                <h1 id='clinic'>진료</h1>
                <h1 id='checkup'>검진</h1>
                <h1 id='counseling'>상담</h1>
              </div>
            ) : (
              <>
                <h1>예약하기</h1>
                <div className='text-box'>
                  <span>원하는 날짜와 시간을 정해보세요</span>
                </div>
              </>
            )}
          </div>
          <div
            className='main-box check-box' //
            onClick={() => setCheckHover(true)}
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
                <div className='text-box'>
                  <span>
                    개인정보 또는 예약번호로
                    <br /> 예약 내역을 조회할 수 있습니다
                  </span>
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

const StyledHome = styled.div<{ closeCheck: boolean }>`
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
    cursor: pointer;
    h1 {
      animation: ${fadeIn} 1s;
      font-size: 5rem;
      text-align: center;
    }
    span {
      animation: ${fadeIn} 1s;
      font-size: 1.3rem;
    }
    .hover-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      height: 100vh;
      h1 {
        height: 33.3%;
        padding-top: 15%;
      }
      &:hover {
        cursor: pointer;
      }
      #clinic,
      #checkup,
      #counseling {
        width: 100%;
        height: 100%;
        &:hover {
          box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
        }
      }
    }
    .text-box {
      margin: 20px;
    }
    .fadeout-reservation {
      animation: ${({ closeCheck }) => (closeCheck ? fadeOut : fadeIn)} 1s ease-out;
    }
  }

  .reservation-box {
    width: 50%;
    color: ${maincolor};
  }
  .check-box {
    position: relative;
    width: 50%;
    background-color: ${maincolor};
    z-index: 10;
    color: white;
    transition: 2s ease;
    left: ${({ closeCheck }) => (closeCheck ? '100%' : '0%')};
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
