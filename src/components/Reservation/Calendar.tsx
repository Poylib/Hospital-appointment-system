import DatePicker from 'react-datepicker';
import { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';

const Calendar = () => {
  const dateHandler = (e: Date) => {
    console.log(e);
  };
  return (
    <StyledCalendar>
      <DatePicker //
        onChange={dateHandler}
        dateFormatCalendar='yyyy년 M월'
        showPreviousMonths={false}
        locale={ko}
        minDate={new Date()}
        inline
      />
    </StyledCalendar>
  );
};
export default Calendar;

const StyledCalendar = styled.div`
  /* width: 800px; */
`;
