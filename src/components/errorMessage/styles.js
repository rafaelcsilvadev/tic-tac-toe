import Styled from "styled-components/macro";

export const BlockMessageSC = Styled.div`
    margin: 10px 0;
    
`;

export const MessageSC = Styled.span`
    font-family: "Verdana", "Halvetica", "sans-serif";
    font-size: 14px;
    font-weight: 500;
    line-height: 1.3;
    color: #f50c00;
    display: ${(props) => props.display};
`;
