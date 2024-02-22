import styled from 'styled-components'

export const StyledLoginPage = styled.div`
    margin: 0 auto;
    max-width: 370px;
    padding: 0 15px;

    > div {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 60px 0 35px 0;
            animation:appears 2s ease-out ;

            > figure {
                margin-right: 30px;
                img {
                    height: 100px;
                    
                }
            }
            > h1{
                font-size: 1.8rem;
            }
        }   

`