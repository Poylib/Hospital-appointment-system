import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Params, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { maincolor } from '../theme';
import { userCheck } from '../util/interface';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [randomNum, setRandomNum] = useState(0);
  const navigate = useNavigate();
  const params: Readonly<Params<string> | any> = useParams();
  const paramsArr = params.id.split('-');
  const reservationDate = `${paramsArr[2]}년 ${paramsArr[1]}월 ${paramsArr[0]}일`;
  const reservationTime = `${paramsArr[4]} : 00`;
  let reservation = '';
  const noshow = false;
  if (paramsArr[3] === 'clinic') reservation = '진료';
  else if (paramsArr[3] === 'counseling') reservation = '상담';
  else reservation = '검진';

  const submitHandler: React.FormEventHandler<HTMLFormElement> = async e => {
    const reservationNum = Math.floor(Math.random() * 1000000000);
    e.preventDefault();
    try {
      const { data } = await axios.get('http://localhost:4000/users');
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].name);
        if (data[i].name === name && data[i].phoneNumber === phoneNumber) {
          if (data[i].noshow) {
            alert('노쇼 이력이 있어 예약할 수 없습니다.');
            navigate('/');
            break;
          } else {
            alert('이미 예약한 일정이 있습니다. 중복 예약할 수 없습니다.');
            navigate('/');
            break;
          }
        }
      }
      await axios.post<userCheck, AxiosResponse<userCheck>, userCheck>('http://localhost:4000/users', {
        reservationDate,
        reservationTime,
        reservation,
        phoneNumber,
        noshow,
        name,
        reservationNum,
      });
    } catch (error) {
      console.log(error);
      console.log('get error');
    }

    setRandomNum(reservationNum);
  };

  return (
    <StyledUserInfo>
      <FormBox>
        <h1>개인정보 입력</h1>
        <form onSubmit={submitHandler}>
          <input placeholder='이름' onChange={e => setName(e.target.value)} required></input>
          <input placeholder='전화번호' onChange={e => setPhoneNumber(e.target.value)} required></input>
          <CheckedBox>
            <div>
              <span>예약내용</span>
              <span>{reservation}</span>
            </div>
            <div>
              <span>예약일자</span>
              <span>{reservationDate}</span>
            </div>
            <div>
              <span>예약시간</span>
              <span>{reservationTime}</span>
            </div>
          </CheckedBox>
          {randomNum ? (
            <div className='after-box'>
              <span>예약번호</span>
              <span>{randomNum}</span>
            </div>
          ) : (
            <button>예약하기</button>
          )}
          <h2>예약 일자에 노쇼할 경우 서비스 이용이 제한됩니다.</h2>
        </form>
      </FormBox>
    </StyledUserInfo>
  );
};

export default UserInfo;

const StyledUserInfo = styled.div`
  padding: 60px 30px;
  height: 100vh;
`;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 50vw;
  max-width: 500px;
  margin: 0 auto;
  background-color: ${maincolor};
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  h1 {
    position: absolute;
    font-size: 30px;
    top: 25px;
    left: 25px;
    color: white;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80%;
    padding: 20px 30px;
    input {
      width: 100%;
      margin: 10px 0;
      padding: 15px 0 15px 30px;
      border-radius: 14px;
      border: none;
    }
    button {
      background-color: #69a3e2;
      border: none;
      color: white;
      padding: 20px;
      margin-top: 10px;
      border-radius: 14px;
      font-size: 24px;
    }
    h2 {
      text-align: center;
      margin: 10px;
      color: red;
    }
    .after-box {
      display: flex;
      justify-content: space-around;
      color: white;
      font-size: 20px;
      margin: 15px;
    }
  }
`;

const CheckedBox = styled.div`
  margin: 10px 0;
  color: grey;
  background-color: white;
  border-radius: 14px;
  div {
    margin: 20px 10px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
  }
`;
