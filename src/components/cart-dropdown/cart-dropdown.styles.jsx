import styled from 'styled-components';

export const CartDropdown = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 110px;
    right: 40px;
    z-index: 5;
    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    button {
    margin-top: auto;
    }
`;

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export const EmptyMessage = styled.div`
    font-size: 15px;
    margin: 50px auto;
    text-transform: uppercase;
    font-style: italic;
`;