import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionItemContainer = styled.div`
    width: 22vw;
    margin-right: .7vw;
    display: flex;
    flex-direction: column;
    height: 320px;
    align-items: center;
    position: relative;

    &:hover {   
        button { 
        opacity: 0.85;
        display: flex;  
        }
    }

    
    button {
        display: none;
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 225px;
    }
`;

export const ItemImage = styled(Link)`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;

    &:hover {
        opacity: 0.8;
    }
`;

export const CollectionFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const Name = styled.div`
    width: 90%;
    margin-bottom: 15px;
`;

export const Price = styled.div`
    width: 10%;
`;

