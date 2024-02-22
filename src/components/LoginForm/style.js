import styled from 'styled-components'

export const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 22px;

    background-color: var(--color-grey-3);
    border-radius: 4px;
    padding: 42px 22px 42px 22px;
    box-shadow: 0px 4px 40px -10px #00000040;
    animation: rigthAppear 1.5s ease-in-out;
    .title__form{
        text-align: center;
        padding-bottom: 7px ;
    }
    .redirect__form{
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 22px;
        margin-top: 12px;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        animation:moveFadeIn 1.5s ease-in-out;
    }
`