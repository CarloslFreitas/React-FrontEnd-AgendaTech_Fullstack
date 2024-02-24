import styled from 'styled-components'

export const StyledContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 49px;
    background-color: var(--color-grey-4);
    border-radius: 4px;
    padding: .8125rem 1.375rem;
    transition: .3s;
    cursor: pointer;
    animation: appears 1s ease-in-out;
    box-shadow: 1px 1px var(--color-grey-1);

    .contactDetail{
        color: #FFF;
        font-size: 14.21px;
        font-family: 'Inter';
        font-weight: 700;
    }
    :hover{
        background-color: var(--color-grey-2);
        transform: scale(1.035);
        box-shadow: 3px 3px var(--color-grey-1);
    }

`