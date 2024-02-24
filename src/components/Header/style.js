import styled, { css } from 'styled-components'

export const StyledHeader = styled.header`
    border-top: solid .0625rem var(--color-grey-3);
    border-bottom:solid .0625rem var(--color-grey-3);
    animation: rigthAppear 1s ease-in-out;
`
export const StyledUserProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 50rem;
    height: 7.375rem;
    margin: .625rem auto;
    animation: rigthAppear 2s ease-in-out;
    padding-inline: 20px;

    > div {
        display: flex;
        gap: 20px;

        > button {
            background-color: var(--color-grey-4);
            font-size: 0.8rem;
        }
    }

    @media (max-width: 549px) {
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
`

