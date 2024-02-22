import { StyledInput, StyledInputField, StyledSpan } from "./style"
import { forwardRef } from "react"

export const InputField = forwardRef(({ label, labelFor, errorMessage, helperText, children,...rest}, ref) => {

    return (
        <StyledInputField>

            <label htmlFor={labelFor}> {label} </label>

            <div>
                <StyledInput ref={ref} {...rest} errorInput={errorMessage ? true : false } />
                {
                    errorMessage 
                        ? (<StyledSpan isTrue={true}> {errorMessage} </StyledSpan>) 
                        : (<StyledSpan isTrue={false}> {helperText} </StyledSpan>)
                }
                {children}
            </div>

        </StyledInputField>
    )
})