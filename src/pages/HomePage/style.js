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
      > i {
            color: var(--color-grey-1);
            transform: scale(1.3);
            cursor: pointer;
            animation: rigthAppear .1s linear ;
            transition: .2s;
            border: solid 1.5px ;
            padding: 5px 7px;
            border-radius: 100%;
            :hover{
                color: var(--color-grey-0);
                border-radius: 100% ;
            }
            > svg {
                  transform: scale(1.4);
              }
      }
      p{
        color: transparent;
        -webkit-text-fill-color : transparent;
        background-image: linear-gradient(to right,#38bdf8, #ffffff,#38bdf8,#ffffff,#38bdf8);
        background-clip: text;
        -webkit-background-clip: text;
        animation: colorChange 7s linear infinite;
        background-size: 1000%;
        text-shadow: .225rem .125rem .2125rem var(--color-grey-2);
        font-size: 1.5rem;
        font-weight: 600;
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
    max-width: 50rem;
    height: 72px;
    margin: .625rem auto;
    animation: appears 2s ease-out;
    padding-inline: 20px;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      > h1 {
        color: aliceblue;
        font-size: 2rem;
      }
      > figure {
                margin-right: 30px;
                img {
                    height: 70px;
                    
                }
            }
            
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