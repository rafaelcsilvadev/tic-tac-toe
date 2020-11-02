import Styled from 'styled-components/macro';

export const BlockMessage = Styled.div`
    margin: 10px 0;
`;

export const Message = Styled.span`
    font-family: "Verdana", "Halvetica", "sans-serif";
    font-size: 14px;
    font-weight: 500;
    line-height: 1.3;
    color: ${(props) => props.color};
`;
