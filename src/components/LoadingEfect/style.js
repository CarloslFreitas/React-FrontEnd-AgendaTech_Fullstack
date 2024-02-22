import styled from "styled-components"

export const StyledLoading = styled.div`
    width: 35px;
    height: 35px;

    border-top: solid 4px var(--color-grey-0);
    border-bottom: solid 4px var(--color-grey-0);
    border-left: solid 4px var(--color-grey-0);
    border-right: solid 4px var(--color-color-primary);
    border-radius: 50%;
    opacity: .85;

    animation: spin .7s linear infinite;
`