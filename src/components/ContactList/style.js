import styled from 'styled-components'

export const StyledContactList = styled.ul`
    display: flex;
    flex-direction: column;
    
    border-radius: .25rem;
    background-color: var(--color-grey-3);
    box-shadow: 0px 0px 4px 1px black;

    padding: 1.4375rem 1.625rem;
    gap: 15px;
    animation: appears 1s ease-in-out;
    overflow-y: auto;

`