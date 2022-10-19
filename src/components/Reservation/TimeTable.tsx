import { time } from 'console';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const TimeTable = ({ schedule }) => {
  const arr = ['10 : 00', '11 : 00', '12 : 00', '13 : 00', '14 : 00', '15 : 00', '16 : 00', '17 : 00', '18 : 00'];
  const [timeLine, setTimeLine] = useState(arr);

  useEffect(() => {
    const newTimeLine = [...arr];
    for (let i = arr.length - 1; i > 0; i--) {
      for (let j = 0; j < schedule.length; j++) {
        if (arr[i].includes(schedule[j].time)) {
          newTimeLine.splice(i, 1);
        }
      }
    }
    setTimeLine(newTimeLine);
  }, [schedule]);
  return (
    <StyledTimeTable>
      <ul>
        {timeLine.map((time, index) => {
          return (
            <li key={`${time}_${index}`} onClick={() => console.log(time)}>
              {time}
            </li>
          );
        })}
      </ul>
    </StyledTimeTable>
  );
};

export default TimeTable;

const StyledTimeTable = styled.div`
  display: flex;
  flex-direction: column;
`;
