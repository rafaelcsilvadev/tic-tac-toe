import Styled from 'styled-components/macro';

const DefaultStyle = Styled.select`
    &:focus{
        outline: none;
    }
`;

export const SelectOneSC = Styled(DefaultStyle)`
    padding: 4px 2px;
`;
