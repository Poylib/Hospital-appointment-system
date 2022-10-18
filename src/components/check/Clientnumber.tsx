import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { OpenFade } from './Clientname';
const Clientnumber = () => {
  const [openFade, setOpenFade] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpenFade(true);
    }, 700);
  });
  return (
    <StyledClientNumber>
      {openFade && (
        <OpenFade>
          <div>clientnumber</div>
        </OpenFade>
      )}
    </StyledClientNumber>
  );
};
export default Clientnumber;

const StyledClientNumber = styled.div``;
