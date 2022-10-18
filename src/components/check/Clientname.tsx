import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fadeIn } from '../../util/Animation';

const Clientname = () => {
  const [openFade, setOpenFade] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpenFade(true);
    }, 700);
  });
  return (
    <>
      {openFade && (
        <OpenFade>
          <StyledClientName>
            <div>fdssfd</div>
          </StyledClientName>
        </OpenFade>
      )}
    </>
  );
};
export default Clientname;

const StyledClientName = styled.div`
  background-color: white;
  padding: 15px;
  width: 60vh;
  height: 80vh;
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const OpenFade = styled.div`
  animation: ${fadeIn} 0.5s;
`;
