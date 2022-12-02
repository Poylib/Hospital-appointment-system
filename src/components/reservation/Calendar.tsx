import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';
import TimeTable from './TimeTable';
import axios from 'axios';
import { maincolor } from '../../theme';

const Calendar = () => {
  const [schedule, setSchedule] = useState([]);
  const [startDate, setStartDate] = useState();
  const [selected, setSelected] = useState('');
  const today = new Date();
  const dateHandler = async (e: Date | any) => {
    const checkedDate = e.toLocaleDateString().split('/').join('-');
    setStartDate(e);
    setSelected(checkedDate);
    try {
      const { data } = await axios.get('http://localhost:4000/schedule');
      for (let i = 0; i < data.length; i++) {
        if (data[i].date === checkedDate) {
          setSchedule(data[i].booked);
          break;
        } else {
          setSchedule([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <StyledCalendar>
      <CalendarBox>
        <DatePicker //
          onChange={dateHandler}
          dateFormatCalendar='yyyy년 M월'
          showPreviousMonths={false}
          useShortMonthInDropdown={false}
          locale={ko}
          // minDate={today.setDate(today.getDate() + 1)} 타입에러 해결 못함
          selected={startDate}
          inline
          disabledKeyboardNavigation
        />
      </CalendarBox>
      <TimeTable schedule={schedule} setSelected={setSelected} selected={selected} />
    </StyledCalendar>
  );
};
export default Calendar;

const StyledCalendar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  min-width: 550px;
  height: 70vh;
  .react-datepicker {
    width: 100%;
    padding: 30px 20px;
    border: none;
    border-right: 1px solid #eaeaea;
    font-size: 1rem;
    color: #606060;
    .react-datepicker__current-month {
      padding: 10px;
      font-size: 20px;
      color: white;
    }
    .react-datepicker__navigation--previous {
      left: 20px;
      top: 50%;
    }
    .react-datepicker__navigation--next {
      right: 20px;
      top: 50%;
    }
    .react-datepicker__month-container {
      width: 100%;
      .react-datepicker__header {
        width: 100%;
        background-color: ${maincolor};
        border: none;
        .react-datepicker__current-month {
          margin-bottom: 10px;
        }
        .react-datepicker__day-names {
          margin: 0;
          .react-datepicker__day-name {
            margin: 3%;
            color: white;
            font-weight: 600;
            font-size: 20px;
          }
        }
      }
      .react-datepicker__month {
        // 날짜 숫자 클래스
        .react-datepicker__day {
          margin: 3%;
          /* color: blue; */
          font-weight: 600;
          font-size: 20px;
          color: #606060;
        }
        //주말 클래스
        .react-datepicker__day--weekend {
          color: #e83667;
        }
        //오늘 날짜 이전, 선택불가 날짜 클래스
        .react-datepicker__day--disabled {
          color: #cacaca;
        }
        //시작 날짜, 종료 날짜 사이 중간날짜 선택완료
        .react-datepicker__day--selected {
          background-color: ${maincolor};
          color: white;
        }
      }
    }
  }
`;

const CalendarBox = styled.div`
  width: 50%;
  min-width: 480px;
`;
