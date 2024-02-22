import styled from 'styled-components'

export const StyledRegisterPage = styled.div`
    margin: 0 auto;
    max-width: 370px;
    padding: 0 15px;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 0 40px 0;
        animation: appears 2s ease-in-out;

        
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 4.2178rem;
            animation: rigthAppear 2s ease-in-out;
        }
        > div {

            display: flex;
            align-items: center;
            animation:appears 2s ease-out ;

            > figure {
                margin-right: 10px;
                img {
                    height: 100px;
                    
                }
            }
            > h1{
                font-size: 1rem;
            }
        }  
    }
`