import styled from 'styled-components';

export const ModalBlock = styled.div`
    align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  opacity: 1;
  z-index: 400;
`;

export const ModalContainer = styled.div`
  background: #21262B;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  max-width: 850px;
  padding: 0 0.8rem;
  width: 100%;
  animation: slide-down 0.2s ease 1;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  padding: 30px 10px;
  position: relative;
  align-self: center;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303742;
  padding: 20px 5px 10px 5px;
`;

export const ModalTitle = styled.span`
  font-size: 22px;
  font-weight: 500;
  align-self: center;
  margin-top: 10px;
`;

export const ModalFooter = styled.div`
  padding: 10px 0px;
  text-align: right;
`;

export const Button = styled.button`
    
  background: #0D0F12;
  color: white;
  font-size: 1em;
  margin: 10px;
  padding: 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity .25s ease-in-out;
  :hover{
      opacity: 0.9;
  }
`;