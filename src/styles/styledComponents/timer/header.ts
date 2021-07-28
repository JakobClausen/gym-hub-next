import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ClockContainer = styled.div`
  position: absolute;
  left: 30px;
  top: 50%;
  height: 50px;
  margin-top: -25px;
  display: flex;
  align-items: center;
`;
export const ClockText = styled.div`
  color: white;
  font-size: 32px;
`;

export const Logo = styled.h1`
  color: white;
  font-size: 100px;
`;
