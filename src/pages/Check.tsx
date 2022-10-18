import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Clientname from '../components/check/Clientname';
import { maincolor } from '../theme';

const Check = () => {
  const [openFade, setOpenFade] = useState(false);
  const params = useParams();
  useEffect(() => {
    setOpenFade(true);
  }, []);
  return (
    <StyledCheck //
      openFade={openFade}
    >
      {params.id === 'clientname' ? <Clientname page={'name'} /> : <Clientname page={'number'} />}
    </StyledCheck>
  );
};
export default Check;

const StyledCheck = styled.div<{ openFade: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${maincolor};
  padding: 60px 30px;
  height: 100vh;
  transition: 1s ease;
  transform: translateX(${({ openFade }) => (openFade ? '0%' : '50%')});
`;
