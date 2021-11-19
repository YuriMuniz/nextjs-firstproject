import styled, { keyframes }  from 'styled-components';


const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;
   
   @media(max-width: 768px){
       margin: 20px;
   }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    width: 400px;
    margin : 20px 0px;
    padding: 10px;
    
    a{
        transition: opacity .25s ease-in-out;
        align-self: flex-start;
        svg{
            color: #fff;             
            cursor: pointer;
        }
        :hover{
            opacity: 0.8   
        }
    }
    h3{
        color: #fff;
    }
`;

export const Input = styled.input`
    max-width: 100%;
    width: 400px;
    height: 40px;
    border-radius: 4px;
    border: none;
    margin-bottom: 10px;
    padding: 20px;
    font-size: 16px;
    background: #21262B;
    color: #fff;
    ::placeholder {
        color: #fff;
    }

`;

export const Button = styled.div`
    max-width: 100%;
    background: #2B2E30;
    color: #fff;
    width: 400px;
    border: none;
    border-radius: 4px;
    padding: 10px;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
    font-size: 18px;
    transition: opacity .25s ease-in-out;
    cursor: pointer;
    :hover{
        opacity: 0.8;
    }
    svg {
        animation: ${rotate} 2s linear infinite;
        align-self: center;
        color: #fff;
        
  }
`;