import styled from "styled-components";

export const StyledHomePage = styled.div`
  height: calc(100vh - 1.25rem);

  main {
    max-width: 50rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.375rem;
    padding: .9375rem 20px;
    
    animation: moveFadeIn 2s ease-in-out;

    height: 29.3125rem;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p{
        color: transparent;
        -webkit-text-fill-color : transparent;
        background-image: linear-gradient(to right,#ffffff, #ffffff,#ff427f,#ffffff,#ffffff);
        background-clip: text;
        -webkit-background-clip: text;
        animation: colorChange 7s linear infinite;
        background-size: 1000%;
        text-shadow: .125rem .125rem .3125rem var(--color-grey-3);
        
      }
      button {
        display: flex;
        justify-content: center;
        font-family: "Inter", sans-serif;
        font-size: 1.375rem;
        width: 2rem;
        :active{
          background-color: var(--color-grey-3);
          box-shadow: 0 0 0 .0625rem #666;
          transform: translateY(.1875rem);
        }
      }
    }
  }

  p {
    font-family: "Inter";
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0em;
    text-align: left;
    color: var(--color-grey-0);
  }

  .empty-techs{
        margin: 2rem auto;
        font-size: 1.25rem;
        font-family: Nunito;
        font-weight: 600;
        background-color: var(--color-grey-4);
        padding: 1.5rem 2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3.125rem;
        border: solid .0625rem var(--color-grey-3);
        border-style: double;
        text-align: center;
        animation: appears 1s ease-in-out;
    }
`
export const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 50rem;
    height: 72px;
    margin: .625rem auto;
    animation: appears 2s ease-out;
    padding-inline: 20px;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.4678rem;
        font-size: .75rem;
        font-weight: 600;
        animation: moveFadeIn 1.5s ease-in;

        :disabled{
            background-color: var(--color-grey-2);
            border: solid 1px var(--color-grey-2);
            :hover{
                background-color: var(--color-grey-2);
                border: solid 1px var(--color-grey-2);
            }
        }
    }
    > h1 {
      color: aliceblue;
      font-size: 2rem;
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
`