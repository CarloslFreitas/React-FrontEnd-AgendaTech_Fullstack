import styled from 'styled-components'

export const StyledRegisterForm = styled.form`

    display: flex;
    flex-direction: column;
    margin: 0 0 40px;
    gap: 22px;

    background-color: var(--color-grey-3);
    border-radius: 4px;
    padding: 25px;
    box-shadow: 0px 4px 40px -10px #00000040;
    animation: rigthAppear 1s ease-out;

    > div {
        display: flex;
        flex-direction: column;
        gap: 22px;
        text-align: center;
        margin-bottom: 15px;
    }

    >button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
`