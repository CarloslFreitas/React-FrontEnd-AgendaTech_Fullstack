import styled, { css } from "styled-components";

export const ButtonStyles = css`
  height: ${({ height }) => height};
  border-radius: 4px;
  transition: 0.3s;

  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    cursor: not-allowed;
    background: var(--color-color-primary-disable);
    border: 1.22px solid var(--color-color-primary-disable);
    :hover {
      background: var(--color-color-primary-disable);
      border: 1.22px solid var(--color-color-primary-disable);
    }
  }

  ${({ buttonStyles }) => {
    switch (buttonStyles) {
      case "primary":
        return css`
          background: var(--color-color-primary);
          border: 1.22px solid var(--color-color-primary);
          padding: 0px 22px 0px 22px;
          width: 100%;

          :hover {
            background: var(--color-color-second);
            border: 1.22px solid var(--color-color-second);
          }
        `;
      case "disable":
        return css`
          background: var(--color-grey-2);
          border: 1.22px solid var(--color-grey-2);
          padding: 0px 16px 0px 16px;
          color: var(--color-grey-0);
          width: 100%;

          :hover {
            background: var(--color-grey-1);
            border: 1.22px solid var(--color-grey-1);
          }
        `;
    }
  }}
`;
export const StyledButton = styled.button`
    ${ButtonStyles}
` 
