import styled, { css } from "styled-components"

export const TitleStyles = css`
   font-family: 'Inter';
   font-weight: 700;
   font-style: normal;
   color: var(--color-grey-0);
`
export const StyledTitle1 = styled.h1` 
   line-height: 28px;
   font-size: 1.125rem;
   ${TitleStyles}
`
export const StyledTitle2 = styled.h2`
   font-size: 1rem;
   line-height: 26px;
   ${TitleStyles}
`
export const StyledTitle3 = styled.h3`
   font-size: 0.875rem;
   line-height: 24px;
   ${TitleStyles}
`

export const TextStyles = css`
   font-family: 'Inter', sans-serif;
   font-size: 0.75rem;
   color: var(--color-grey-1);
   ${({ textStyles }) => {
      switch (textStyles) {
         case 'headline':
            return css`
               font-weight: 400;
               font-style: normal;
               line-height: 22px;

            `
         case 'headline-bold':
            return css`
               font-weight: 700;
               font-style: normal;
               line-height: 18px;
            `
         case 'headline-italic':
            return css`
               font-weight: 400;
               font-style: italic;
               line-height: 18px;
            `
      }
   }}
`
export const StyledText = styled.p`
    ${TextStyles}
`