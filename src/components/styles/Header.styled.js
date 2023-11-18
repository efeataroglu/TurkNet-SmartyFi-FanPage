import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: 140px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 140px;
    margin-bottom: 40px;
  }
`;

export const TNLogo = styled.img`
  width: 140px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 140px;
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 450px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
