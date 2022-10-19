import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fadeIn } from '../../util/Animation';
import { BsFilePerson, BsPhone, BsList } from 'react-icons/bs';
import { basecolor, maincolor } from '../../theme';
import { userCheck, ChildProps } from '../../util/interface';
import axios from 'axios';
import CheckPage from './CheckPage';

const Client = ({ page }: ChildProps) => {
  const [openFade, setOpenFade] = useState(false);
  const [name, setName] = useState('');
  const [phoneCheck, setPhoneCheck] = useState('');
  const [reservationCheck, setReservationCheck] = useState<string | number>(0);
  const [viewInfo, setViewInfo] = useState<userCheck>({
    id: 0,
    name: '',
    phoneNumber: '',
    noshow: false,
    reservation: '',
    reservationDate: '',
    reservationTime: '',
    reservationNum: 0,
  });
  useEffect(() => {
    setTimeout(() => {
      setOpenFade(true);
    }, 700);
  });

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.get('http://localhost:4000/users');
      if (page === 'name') {
        data.map((obj: userCheck) => {
          if (obj.name === name && obj.phoneNumber === phoneCheck) setViewInfo(obj);
        });
      } else {
        data.map((obj: userCheck) => {
          if (obj.reservationNum === Number(reservationCheck)) setViewInfo(obj);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {openFade && (
        <OpenFade>
          <StyledClientName>
            <h1 className='header'>예약조회</h1>
            {viewInfo.name ? (
              <CheckPage viewInfo={viewInfo} />
            ) : (
              <form onSubmit={submitHandler}>
                {page === 'name' ? (
                  <>
                    <div className='input-box'>
                      <BsFilePerson className='icon' size='26px' />
                      <input type='text' placeholder='이름' onChange={e => setName(e.target.value)} />
                    </div>
                    <div className='input-box'>
                      <BsPhone className='icon' size='26px' />
                      <input type='number' placeholder='전화번호' onChange={e => setPhoneCheck(e.target.value)} />
                    </div>
                  </>
                ) : (
                  <div className='input-box'>
                    <BsList className='icon' size='26px' />
                    <input type='number' placeholder='예약번호' onChange={e => setReservationCheck(e.target.value)} />
                  </div>
                )}
                <button>조회</button>
              </form>
            )}
          </StyledClientName>
        </OpenFade>
      )}
    </>
  );
};
export default Client;

const StyledClientName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: white;
  padding: 15px;
  width: 60vh;
  height: 60vh;
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  .header {
    position: absolute;
    top: 5px;
    left: 5px;
  }
  h1 {
    padding: 20px;
    font-size: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 40px;
    }
    input {
      width: 100%;
      border: none;
      font-size: 20px;
      &:focus {
        outline: none;
      }
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    button {
      height: 70px;
      margin: 10px;
      width: 100%;
      padding: 20px;
      color: white;
      font-size: 30px;
      background-color: ${maincolor};
      border: none;
      border-radius: 14px;
      cursor: pointer;
    }
    .input-box {
      display: flex;
      align-items: center;
      width: 100%;
      height: 70px;
      margin: 10px;
      border: 1px solid ${basecolor};
      border-radius: 14px;
    }
    .icon {
      margin: 0 20px;
    }
  }
`;

export const OpenFade = styled.div`
  animation: ${fadeIn} 0.5s;
`;
