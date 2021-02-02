import Styled from "styled-components/macro";

const DefaultStyle = Styled.button`
    margin: ${(props) => props.margin};
    &:focus{
        outline: none;
    }
`;

export const ButtonOneSC = Styled(DefaultStyle)`
    padding: 5px 10px;
    background-color: #119f17;
`;

export const ButtonTicTacToeSC = Styled(DefaultStyle)`
    float: left;
	width: 90px;
	height: 90px;
	border: 1px #fff solid;
    background: none;
`;
