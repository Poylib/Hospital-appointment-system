import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../assets/logo.png';
const Header = () => {
  return (
    <StyledHeader>
      <Link to='/'>
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
  width: 100vw;
  z-index: 99;
  background-color: inherits;
  img {
    padding-top: 30px;
    width: 20rem;
  }
`;
