import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { maincolor, basecolor } from '../../theme';
import { TimeProps } from '../../util/interface';
const TimeTable = ({ schedule, setSelected, selected }: TimeProps) => {
  const arr = ['10 : 00', '11 : 00', '12 : 00', '13 : 00', '14 : 00', '15 : 00', '16 : 00', '17 : 00', '18 : 00'];
  const navigate = useNavigate();
  const params = useParams();
  const [timeLine, setTimeLine] = useState(arr);

  useEffect(() => {
    const newTimeLine = arrArrangeFunc(arr);
    setTimeLine(newTimeLine);
  }, [schedule]);

  const clickHandle: React.MouseEventHandler<HTMLParagraphElement> = e => {
    if (e.target instanceof HTMLElement) {
      const inputSelect = `${selected}-${params.id}-${e.target.innerHTML.split(' : ')[0]}`;
      setSelected(inputSelect);
      const targetNum: number = Number(e.target.id);
      const newArr = arrArrangeFunc(arr);
      newArr[targetNum] = '예약하기';
      setTimeLine(newArr);
      if (e.target.innerHTML === '예약하기') {
        navigate(`/infoinput/${selected}`);
      }
    }
  };

  const arrArrangeFunc = (arr: string[]) => {
    const newArr = [...arr];
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < schedule.length; j++) {
        if (arr[i].includes(schedule[j].time)) {
          newArr.splice(i, 1);
        }
      }
    }
    return newArr;
  };

  return (
    <StyledTimeTable>
      <h1>예약가능한 시간</h1>
      <div className='time-box'>
        {timeLine.map((time, index) => {
          return (
            <p //
              key={`${time}_${index}`}
              id={`${index}`}
              onClick={clickHandle}
            >
              {time}
            </p>
          );
        })}
      </div>
      <button>예약하기</button>
    </StyledTimeTable>
  );
};

export default TimeTable;

const StyledTimeTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;
  margin: 30px 20px;
  padding: 20px 0;
  background-color: ${maincolor};
  border-top-right-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
  h1 {
    width: 90%;
    text-align: center;
    padding: 10px;
    height: 100px;
    margin-bottom: 20px;
    line-height: 80px;
    font-weight: bold;
    font-size: 30px;
    color: white;
    border-bottom: 1px solid white;
  }
  .time-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    p {
      width: 30%;
      padding: 10px 0;
      margin: 10px;
      text-align: center;
      font-size: 30px;
      color: white;
      /* opacity: 0.4; */
      &:hover {
        cursor: pointer;
      }
    }
  }
  button {
    background-color: ${maincolor};
    /* opacity: 0.8; */
    border: none;
    color: white;
    font-size: 30px;
    width: 90%;
    padding: 20px 0;
    margin-top: 20px;
    border-top: 1px solid white;
    &:hover {
      cursor: pointer;
    }
  }
`;
