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
    .logout-efect {
        width: 30px;
        height: 20.89px;
        border-top: solid 3px var(--color-grey-0);
        border-bottom: solid 3px var(--color-grey-0);
        border-left: solid 3px var(--color-grey-0);
        border-right: solid 3px var(--color-color-primary);
        border-radius: 50px;
        opacity: .5;

        animation: spin .5s linear infinite;
    }
    .loader{
        display: inline-block;
    }
    .loader__ball {
        display: inline-block;
        width: 5px;
        height: 5px;
        background-color: var(--color-color-primary);
        margin-inline: 5px;
        border-radius: 50%;
        animation: bounce 250ms alternate infinite;
    }
    .loader__ball:nth-child(2){
        animation-delay: 150ms;
    }
    .loader__ball:nth-child(3){
        animation-delay: 300ms;
    }
    @keyframes bounce {
        from {
            transform: scaleX(1.25);
        }
        to {
            transform: translateY(-10px) scaleX(1);
        }
    }
`

