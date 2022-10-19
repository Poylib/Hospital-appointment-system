import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';
import TimeTable from './TimeTable';
import axios from 'axios';

const Calendar = () => {
  const [schedule, setSchedule] = useState([]);
  const [startDate, setStartDate] = useState();
  const dateHandler = async (e: Date) => {
    setStartDate(e);
    const checkedDate = e.toLocaleDateString().split('/').join('');
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
      <DatePicker //
        onChange={dateHandler}
        dateFormatCalendar='yyyy년 M월'
        showPreviousMonths={false}
        useShortMonthInDropdown={false}
        locale={ko}
        minDate={new Date()}
        selected={startDate}
        inline
        disabledKeyboardNavigation
      />
      <TimeTable schedule={schedule} />
    </StyledCalendar>
  );
};
export default Calendar;

const StyledCalendar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;

  .react-datepicker {
    padding: 30px 20px;
    border: none;
    border-right: 1px solid #eaeaea;
    font-size: 1.7rem;
    color: #606060;
    .react-datepicker__navigation--previous {
      left: 20px;
      top: 29px;
    }
    .react-datepicker__navigation--next {
      right: 20px;
      top: 29px;
    }
    .react-datepicker__month-container {
      width: 360px;
      .react-datepicker__header {
        width: 350px;
        background-color: white;
        border: none;
        .react-datepicker__current-month {
          margin-bottom: 10px;
        }
        .react-datepicker__day-names {
          margin: 0;
          .react-datepicker__day-name {
            margin: 0.5rem;
            color: #606060;
            font-weight: 600;
          }
        }
      }
      .react-datepicker__month {
        width: 350px;
        margin: 0;
        // 날짜 숫자 클래스
        .react-datepicker__day {
          margin: 0.4rem 0.5rem;
          color: #606060;
          font-weight: 600;
        }
        //주말 클래스
        .react-datepicker__day--weekend {
          color: #e83667;
        }
        //오늘 날짜 선택 클래스
        .react-datepicker__day--today {
          border-radius: 1rem;
          color: #63a1ff;
        }
        //오늘 날짜 이전, 선택불가 날짜 클래스
        .react-datepicker__day--disabled {
          color: #cacaca;
        }
        //시작 날짜, 종료 날짜 사이 중간날짜 선택완료
      }
    }
  }
`;
