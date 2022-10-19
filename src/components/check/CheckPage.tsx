import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { maincolor } from '../../theme';
import { userCheck } from '../../util/interface';
import { OpenFade } from './Client';
const CheckPage = ({ viewInfo }: any) => {
  const { id, name, phoneNumber, reservationNum, reservation, reservationDate, reservationTime } = viewInfo;
  const navigate = useNavigate();
  const deleteHandler = async () => {
    const deleteCheck = confirm('예약을 취소하시겠습니까?');
    if (deleteCheck) {
      try {
        await axios.delete(`http://localhost:4000/users/${id}`);
        alert('삭제되었습니다');
        navigate('/');
      } catch (error) {
        alert('통신이 원할하지 않거나 이미 삭제된 예약 입니다.');
      }
    }
  };
  return (
    <OpenFade>
      <StyledCheckPage>
        <Content>
          <h2>예약자 정보</h2>
          <ul>
            <li>
              <span>이름 : {name}</span>
            </li>
            <li>전화번호 : {phoneNumber}</li>
            <li>예약번호 : {reservationNum}</li>
          </ul>
        </Content>
        <Line />
        <Content>
          <h2>예약내용</h2>
          <ul>
            <li>예약 : {reservation}</li>
            <li>예약날짜 : {reservationDate}</li>
            <li>예약시간 : {reservationTime}</li>
          </ul>
        </Content>
        <ButtonBox>
          <button>예약변경</button>
          <button onClick={deleteHandler}>예약취소</button>
        </ButtonBox>
      </StyledCheckPage>
    </OpenFade>
  );
};

export default CheckPage;

const StyledCheckPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  h2 {
    font-size: 33px;
    width: 40%;
  }
  ul {
    display: flex;
    flex-direction: column;
    width: 40%;
    li {
      margin: 10px 0;
    }
  }
`;
const Line = styled.div`
  border-top: 2px solid #eee;
`;

const ButtonBox = styled.div`
  width: 100%;
  text-align: center;
  button {
    margin: 5px;
    padding: 10px 0;
    width: 40%;
    background-color: ${maincolor};
    border: none;
    border-radius: 14px;
    font-size: 20px;
    color: white;
    cursor: pointer;
  }
`;
