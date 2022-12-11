import styled from 'styled-components';
import Calendar from '../components/appointment/Calendar';
import { fadeIn } from '../util/Animation';

const Appointment = () => {
  return (
    <StyledReservation>
      <Calendar />
    </StyledReservation>
  );
};
export default Appointment;

const StyledReservation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 30px;
  height: 100vh;
  animation: ${fadeIn} 1s;
`;
