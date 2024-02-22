import styled, { css } from 'styled-components'

export const StyledInputField = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 15px;

    > label {
        font-family: 'Inter';
        font-size: 12px;
        font-weight: 400;
        color: var(--color-grey-0);
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: relative;

        svg {
            position: absolute;
            top: 16px;
            right: 15px;
            color: var(--color-grey-1);
            transform: scale(1.3);
            cursor: pointer;
            animation: rigthAppear .1s linear ;
            transition: .2s;
            :hover{
                color: var(--color-grey-0);
            }
        }
    }  
`
export const SpanStyles = css`
    font-family: 'Inter';
    font-size: 10px;
    font-weight: 400;

    ${({ isTrue }) => {
        switch (isTrue) {
            case true:
                return css`
                    color: var(--color-negative);
                `
            case false:
                return css`
                    color: var(--color-grey-1);
                `
        }
    }}

`
export const StyledSpan = styled.span`
    ${SpanStyles}
`
export const InputStyles = css`
        height: 48px;
        padding: 0 16px;
        width: 100%;
        border: ${({ errorInput }) => errorInput ? "solid 1.22px var(--color-negative)" : "none"};
        border-radius: 4px;
        background-color: var(--color-grey-2);
        color: var(--color-grey-1);

        font-family: 'Inter';
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        transition: all.3s;
        
        ::placeholder{ color: var(--color-grey-1); }

        :focus {
            color: var(--color-grey-0);
            border: ${({ errorInput }) => errorInput ? "solid 1.22px var(--color-negative)" : "none"};
            
            ::placeholder{ color: var(--color-grey-0); }
        }
`
export const StyledInput = styled.input`
    ${InputStyles}
`