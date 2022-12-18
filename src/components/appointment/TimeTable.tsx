import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { maincolor } from '../../theme';
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
  margin-left: 15px;
  background-color: ${maincolor};
  border-top-right-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
  h1 {
    width: 100%;
    text-align: center;
    margin-top: 30px;
    padding: 30px;
    height: 160px;
    font-weight: bold;
    font-size: 40px;
    color: white;
  }
  .time-box {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    p {
      width: 50%;
      margin: 10px 0;
      padding: 20px 0;
      text-align: center;
      font-size: 40px;
      color: white;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
