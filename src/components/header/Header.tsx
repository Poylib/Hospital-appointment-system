import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../assets/logo.png';
const Header = () => {
  return (
    <StyledHeader>
      <Link to='/pre-onboarding-lululab/'>
        <img src={logoImage} alt='로고 이미지' />
      </Link>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  z-index: 99;
  background-color: inherits;
  img {
    padding: 10px;
    width: 140px;
  }
`;
