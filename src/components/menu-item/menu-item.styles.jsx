import styled from "styled-components";

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        & .background-image {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        & .content {
            opacity: .9;
        }
    }

    &.large {
        height: 380px;
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }
`;

export const BGImage = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
`;

export const ContentContainer = styled.div`
    position: relative;
    height: 90px;
    max-width: 90%;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: #fafafa;
    opacity: .75;
    position: absolute;
    transition: all .2s;
`;

export const Title = styled.h2`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 1.75vmin;
    color: #4a4a4a;
`;

export const SubTitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;