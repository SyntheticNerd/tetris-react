import styled from 'styled-components';
export const KeyboardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 40px);
    grid-template-rows: repeat(3, 1fr);
    gap: min(16px, 2vh);
    margin-left: 8px;
    margin-top: 16px;
    & > button:nth-child(1) {
        grid-column: 2 / 3;
    }
    & > button:nth-child(2) {
        grid-column: 1 / 2;
    }
    & > button:nth-child(3) {
        grid-column: 2 / 3;
    }
    & > button:nth-child(4) {
        grid-column: 3 / 4;
    }
    & > button:nth-child(5) {
        grid-column: 1 / 4;
    }
`;
export const KeyboardKey = styled.button`
    display: flex;
    width: ${(props)=>props.width?props.width:"100%"};
    border: none;
    outline: none;
    padding: 0;
    border-radius: 9px;
    background: none;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.5);
    transition: transform 0.1s;
    & > img{
        /* display: none; */
        width: 100%;
    }
    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(1);
    }
` 