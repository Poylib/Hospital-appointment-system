import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { maincolor } from '../../theme';

const TimeTable = ({ schedule }) => {
  const arr = ['10 : 00', '11 : 00', '12 : 00', '13 : 00', '14 : 00', '15 : 00', '16 : 00', '17 : 00', '18 : 00'];
  const navigate = useNavigate();
  const [timeLine, setTimeLine] = useState(arr);

  useEffect(() => {
    const newTimeLine = arrArrangeFunc(arr);
    setTimeLine(newTimeLine);
  }, [schedule]);

  const clickHandle: React.MouseEventHandler<HTMLLIElement> = e => {
    if (e.target instanceof HTMLElement) {
      const targetNum: number = Number(e.target.id);
      const newArr = arrArrangeFunc(arr);
      newArr[targetNum] = '예약하기';
      setTimeLine(newArr);

      if (e.target.innerHTML === '예약하기') {
        navigate(`/infoinput/${targetNum}`);
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
      {timeLine.map((time, index) => {
        return (
          <li //
            key={`${time}_${index}`}
            id={`${index}`}
            onClick={clickHandle}
          >
            {time}
          </li>
        );
      })}
    </StyledTimeTable>
  );
};

export default TimeTable;

const StyledTimeTable = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 140px;
  margin-left: 15px;
  width: 50%;
  height: 80%;
  overflow: scroll;
  li {
    font-size: 30px;
    margin: 10px 0;
    width: 100%;
    text-align: center;
    padding: 10px;
    height: 50px;
    &:hover {
      color: white;
      background-color: ${maincolor};
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;
