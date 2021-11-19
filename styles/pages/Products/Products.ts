import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    

`;

export const ProductList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 400px;
    
`;

export const Product = styled.li`
    border: 1px solid #eee;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 3px;
    img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        align-self: center;
    }
`;

export const ContentProduct = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 20px;

    span{
        margin: 10px 0px;
    }
`;

export const HeaderProduct = styled.div`
    display: flex;
    flex-direction: row;
    
    justify-content: space-between;
                    
    border-bottom: 1px solid #eee;
    h2{
        font-size: 20px;
        padding: 20px 0px ;
    }                    
`;

export const IconGroup = styled.div`
    display: flex;
    flex-direction: row;
    width: 60px;
    svg{
        font-size: 18px;
        margin-left: 10px;
        cursor: pointer;
        transition: opacity .25s ease-in-out ;
        :hover{
            opacity: 0.8;
        }
    }
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    margin : 20px 0px;
    padding: 10px;
    a{
        transition: opacity .25s ease-in-out;
        svg{
            color: #fff;             
            cursor: pointer;
        }
        :hover{
            opacity: 0.8   
        }
    }
   
    button {
        background: #2B2E30;
        color: #fff;
        padding: 12px;
        margin-right: -10px;
        border: none;
        cursor: pointer;
        font-size: 18px;
        border-radius: 4px;
        transition: opacity .25s ease-in-out;
        display: flex;
        flex-direction: row;
        align-items: center;
        :hover{
            opacity: 0.8;
        }
        svg{
            margin-left: 3px;
            font-size: 16px;
            
        }
    }
`;

