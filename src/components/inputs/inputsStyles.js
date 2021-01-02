import Styled from "styled-components/macro";

const DefaultStyle = Styled.input`
    padding: 0 2px;
    margin: ${(props) => props.margin};
    &:focus{
        outline: none;
    }
`;

export const InputOneSC = Styled(DefaultStyle)``;
