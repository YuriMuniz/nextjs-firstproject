import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 768px){
        flex-direction: column;
    }
    
    
`;

export const Button = styled.button`
    background: #21262B;
    color: #fff;
    font-size: 18px;
    border: none;
    padding: 30px;
    margin: 20px;
    cursor: pointer;
    border-radius: 4px;
    transition: opacity .25s ease-in-out;
    :hover{
        opacity: 0.8;
    }
`;