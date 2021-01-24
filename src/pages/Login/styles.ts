import styled from 'styled-components';

import loginBackgroundImage from './../../assets/loginBackgroundImage.png';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width:100%;
    max-width: 736px;

    
    form {
        margin: 80px 0;
        width: 340px;
        align-items: center;

        h1 {
            margin-bottom: 24px;
        }

        input {
            background: #fff;
            border-radius:10px 10px 0px 0px;
            padding: 16px;
            width: 100%;
            border: 1px solid #DCE2E6;

            & + input {
                border-radius: 0px 0px 10px 10px;
            }

            &::placeholder {
                color: #A0ACB2;
                font-family: 'Barlow', sans-serif;
            }
        }

        > div {
            margin: 24px 0 32px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .check{
                display: flex;
                align-items: center;
                button {
                    width: 24px;
                    height: 24px;
                    background: #FFFFFF;

                    border: 1px solid #DCE2E6;
                    border-radius: 8px;
                }
               
                span{
                    color: #A0ACB3;
                    margin-left: 16px;
                }



                
            }
            .remember {
                a{
                    color: #A0ACB3;
                }
            }
            
        }
        
    }
    
    div.alert {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-family: 'Heebo', sans-serif;
        font-size: 14px;
        line-height: 22px;
        color: #617480;
        
        svg {
            margin-right:26px;
        }
        span {
            width: 100%;
            max-width: 139px;
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${loginBackgroundImage}) no-repeat center;
    background-size: cover;
`;


