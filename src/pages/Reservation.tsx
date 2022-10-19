import styled from 'styled-components';
import Calendar from '../components/reservation/Calendar';
import { fadeIn } from '../util/Animation';

const Reservation = () => {
  return (
    <StyledReservation>
      <Calendar />
    </StyledReservation>
  );
};
export default Reservation;

const StyledReservation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 30px;
  height: 100vh;
  animation: ${fadeIn} 1s;
`;
