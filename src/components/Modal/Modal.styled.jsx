import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.2);

  opacity: 1;
  visibility: visible;
  overflow-y: scroll;
`;

export const Content = styled.div`
  position: absolute;
  left: 50.5%;
  top: 20%;

  width: 350px;
  padding: 24px;

  transform: translate(-50.5%, -20%);

  border-radius: 20px;

  

  background-color: #fff;
`;
