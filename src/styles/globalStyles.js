import { createGlobalStyle } from 'styled-components'

export const StyledGlobalStyle = createGlobalStyle`
    :root {
        --color-color-primary: #38bdf8;
        --color-color-second: #7dd3fc;
        --color-color-primary-disable: #324459;

        --color-grey-4: #121214;
        --color-grey-3: #212529;
        --color-grey-2: #343b41;
        --color-grey-1: #868e96;
        --color-grey-0: #f8f9fa;

        --color-sucess: #3fe864;
        --color-negative: #e83f5b;
    }

    body{
        background-color: var(--color-grey-4);
    }

    #GlobalLoad {
        border-radius: 50%;
        margin: 40vh auto;
        justify-self: center;
        width: 70px;
        height: 70px;
        border-top: solid 8px var(--color-grey-0);
        border-bottom: solid 8px var(--color-grey-0);
        border-left: solid 8px var(--color-grey-0);
        border-right: solid 8px var(--color-color-primary);
        border-radius: 50%;
        opacity: .85;

        animation: spin .5s linear infinite;
    }

    @keyframes appears {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
  
    50% {
      transform: translateY(5px);
      opacity: 1;
    }
}
    @keyframes appearsModal {
    0% {
      transform: translateY(-200px);
      opacity: 0;
    }
  
    50% {
      transform: translateY(5px);
      opacity: 1;
    }
}

    @keyframes moveFadeIn {
        0% {
        transform: scale(0.3);
        opacity: 0;
        }
    
        50% {
        transform: scale(1);
    
        opacity: 1;
        }
    }

    @keyframes spin {
        0%{
        transform: rotate(0);
        }
        100%{
        transform: rotate(360deg);
        }
    }

    @keyframes lefAppear{
        from{
        opacity: 0;
        transform: translateX(-150px);
        }
        to{
        opacity: 1;
        }
    }

    @keyframes rigthAppear{
        0% {
        transform: scale(0.3);
        opacity: 0;
        }
        50% {
        transform: scale(1);
    
        opacity: 1;
        }
    }

    @keyframes dropAppear{
        from{
        opacity: 0;
        transform: translateY(-400px);
        }
        to{
        opacity: 1;
        }
    }

    @keyframes anime {
        0%, 100% {
        transform: translateY(0);
        }
        50%{
        transform: translateY(-20px);
        }
    }

    @keyframes beat {
        0%, 100% {
        transform: scale(1);
        }
        50%{
        transform: scale(1.1);
        }
    }

    @keyframes colorChange {
        0% {background-position: 0% 100%;}
        50%{background-position: 100% 0%;}
        100% {background-position: 0% 100%;}
    }
    
    ::-webkit-scrollbar{
        width: 2px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: var(--color-color-primary);
        border: solid 1px var(--color-color-primary);
        border-radius: 4px;
    }
    ::-webkit-scrollbar-corner{
        border: solid 2px red;
    }
`


